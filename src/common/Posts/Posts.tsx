import React, { useRef, useCallback, useEffect } from 'react'
import useStyles from './style'
import { Pattern, IPost, ActivePost } from '../index'
import { CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { RootState, IBlogState } from '../../store/types'
import axios, { Canceler } from 'axios'

export const Posts: React.FC = props => {
    const dispatch = useDispatch()
    const blog: IBlogState = useSelector<RootState, IBlogState>(state => state.blog)

    const classes = useStyles()

    const observer = useRef<IntersectionObserver>()

    const lastPostRef = useCallback((node: HTMLDivElement | null) => {
        if (blog.loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && blog.hasMore) {
                dispatch(actions.incPageNumber())
            }
        })
        if (node) observer.current.observe(node)
    }, [blog.loading, blog.hasMore, dispatch])

    useEffect(() => {
        dispatch(actions.setPatterns([]))
        let currentPattern: IPost[] = []
        let currentArray: IPost[][] = []

        blog.posts.map((post, index) => {
            currentPattern.push(post)
            if ((index + 1) % 6 === 0) {
                currentArray.push(currentPattern)
                currentPattern = []
            }
            return null
        })

        if (currentPattern.length !== 0) currentArray.push(currentPattern)

        dispatch(actions.setPatterns(currentArray))
    }, [blog.posts, dispatch])

    useEffect(() => {
        dispatch(actions.setLoading(true))
        dispatch(actions.setError(false))

        let cancel: Canceler
        axios({
            method: 'GET',
            url: `https://api.instantwebtools.net/v1/passenger?page=${ blog.pageNumber }&size=10`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(response => {
            const indexGap = blog.posts.length
            dispatch(actions.setPosts([...response.data.data.map((post: any, index: number) => {
                return { title: post.name, id: indexGap + index }
            })]))
            dispatch(actions.setHasMore(response.data.data.length > 0))
            dispatch(actions.setLoading(false))
        })
        .catch(error => {
            if (axios.isCancel(error)) return
            dispatch(actions.setError(true))
        })
        return () => cancel()
    }, [blog.pageNumber, dispatch])

    return (
        <div className = { classes.root }>
            { blog.activePostId !== null && <ActivePost postId = { blog.activePostId as number }/> }
            {
                blog.patterns.map((pattern, index) => {
                    return blog.patterns.length === index + 1 ?
                        <div key = { `pattern ${ index }` } ref = { lastPostRef } style = { { width: '100%', height: '100%' } }>
                            <Pattern posts = { pattern }/>
                        </div> : 
                        <div key = { `pattern ${ index }` } style = { { width: '100%', height: '100%' } }>
                            <Pattern posts = { pattern }/>
                        </div>
                })
            }
            { blog.loading && <CircularProgress color = "primary" className = { classes.spinner }/> }
            { blog.error && <div className = { classes.error }>Error</div> }
        </div>
    )
}