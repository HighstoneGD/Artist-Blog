import { useEffect, useState } from 'react'
import { IPost } from '../index'

export default function usePattern(posts: IPost[]) {
    const [patterns, setPatterns] = useState<IPost[][]>([])

    useEffect(() => {
        setPatterns([])
        let currentPattern: IPost[] = []
        let currentArray: IPost[][] = []

        posts.map((post, index) => {
            currentPattern.push(post)
            if ((index + 1) % 6 === 0) {
                currentArray.push(currentPattern)
                currentPattern = []
            }
        })

        if (currentPattern.length !== 0) currentArray.push(currentPattern)

        setPatterns(currentArray)
    }, [posts])

    return patterns
}