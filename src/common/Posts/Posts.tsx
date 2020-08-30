import React, { useState, useRef, useCallback } from 'react'
import useStyles from './style'
import usePosts from './usePosts'
import { Pattern } from '../index'
import usePattern from './usePattern'
import { CircularProgress } from '@material-ui/core'

export const Posts: React.FC = props => {
    const [pageNumber, setPageNumber] = useState<number>(1)
    const classes = useStyles()

    const {
        loading,
        error,
        posts,
        hasMore
    } = usePosts(pageNumber)

    const observer = useRef<IntersectionObserver>()
    const lastPostRef = useCallback((node: HTMLDivElement | null) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(pageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore, pageNumber])

    const patterns = usePattern(posts)

    return (
        <div className = { classes.root }>
            {
                patterns.map((pattern, index) => {
                    return patterns.length === index + 1 ?
                        <div key = { `pattern ${ index }` } ref = { lastPostRef } style = { { width: '100%', height: '100%' } }>
                            <Pattern posts = { pattern }/>
                        </div> : 
                        <div key = { `pattern ${ index }` } style = { { width: '100%', height: '100%' } }>
                            <Pattern posts = { pattern }/>
                        </div>
                })
            }
            { loading && <CircularProgress color = "primary" className = { classes.spinner }/> }
            { error && <div className = { classes.error }>Error</div> }
        </div>
    )
}