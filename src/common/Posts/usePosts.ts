import { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'
import { IPost } from './types'

export default function usePosts(pageNumber: number) {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [posts, setPosts] = useState<IPost[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel: Canceler
        axios({
            method: 'GET',
            url: `https://api.instantwebtools.net/v1/passenger?page=${ pageNumber }&size=10`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(response => {
            setPosts(prevPosts => {
                return [...prevPosts, ...response.data.data.map((post: any) => post.name)]
            })
            setHasMore(response.data.data.length > 0)
            setLoading(false)
        })
        .catch(error => {
            if (axios.isCancel(error)) return
            setError(true)
        })
        return () => cancel()
    }, [pageNumber])

    return { loading, error, posts, hasMore }
}
