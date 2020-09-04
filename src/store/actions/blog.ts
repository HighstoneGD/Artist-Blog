import { IPost } from '../../common';
import * as actionTypes from './actionTypes'
import * as types from './types'

export const setPosts = (posts: IPost[]): types.IInitSetPosts => {
    return {
        type: actionTypes.INIT_SET_POSTS,
        payload: {
            posts
        }
    }
}

export const incPageNumber = (): types.IInitIncPageNumber => {
    return {
        type: actionTypes.INIT_INC_PAGE_NUMBER
    }
}

export const setHasMore = (hasMore: boolean): types.IInitSetHasMore => {
    return {
        type: actionTypes.INIT_SET_HAS_MORE,
        payload: {
            hasMore
        }
    }
}

export const setLoading = (loading: boolean): types.IInitSetLoading => {
    return {
        type: actionTypes.INIT_SET_LOADING,
        payload: {
            loading
        }
    }
}

export const setError = (error: boolean): types.IInitSetError => {
    return {
        type: actionTypes.INIT_SET_ERROR,
        payload: {
            error
        }
    }
}

export const setPatterns = (patterns: IPost[][]): types.IInitSetPatterns => {
    return {
        type: actionTypes.INIT_SET_PATTERNS,
        payload: {
            patterns
        }
    }
}

export const setActivePost = (id: number | null): types.IInitSetActivePost => {
    return {
        type: actionTypes.INIT_SET_ACTIVE_POST,
        payload: {
            id
        }
    }
}