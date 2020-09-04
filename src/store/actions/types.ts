import { IPost } from './../../common'
import * as actionTypes from './actionTypes'

export interface ISetPostsAction {
    payload: {
        posts: IPost[]
    }
}

export interface ISetPosts extends ISetPostsAction {
    type: typeof actionTypes.SET_POSTS
}

export interface IInitSetPosts extends ISetPostsAction {
    type: typeof actionTypes.INIT_SET_POSTS,
}

export interface IIncPageNumber {
    type: typeof actionTypes.INC_PAGE_NUMBER
}

export interface IInitIncPageNumber {
    type: typeof actionTypes.INIT_INC_PAGE_NUMBER
}

export interface ISetHasMoreAction {
    payload: {
        hasMore: boolean
    }
}

export interface ISetHasMore extends ISetHasMoreAction {
    type: typeof actionTypes.SET_HAS_MORE
}

export interface IInitSetHasMore extends ISetHasMoreAction {
    type: typeof actionTypes.INIT_SET_HAS_MORE
}

export interface ISetLoadingAction {
    payload: {
        loading: boolean
    }
}

export interface ISetLoading extends ISetLoadingAction {
    type: typeof actionTypes.SET_LOADING
}

export interface IInitSetLoading extends ISetLoadingAction {
    type: typeof actionTypes.INIT_SET_LOADING
}

export interface ISetErrorAction {
    payload: {
        error: boolean
    }
}

export interface ISetError extends ISetErrorAction {
    type: typeof actionTypes.SET_ERROR
}

export interface IInitSetError extends ISetErrorAction {
    type: typeof actionTypes.INIT_SET_ERROR
}

export interface ISetPatternsAction {
    payload: {
        patterns: IPost[][]
    }
}

export interface ISetPatterns extends ISetPatternsAction {
    type: typeof actionTypes.SET_PATTERNS
}

export interface IInitSetPatterns extends ISetPatternsAction {
    type: typeof actionTypes.INIT_SET_PATTERNS
}

export interface ISetActivePostAction {
    payload: {
        id: number | null
    }
}

export interface ISetActivePost extends ISetActivePostAction {
    type: typeof actionTypes.SET_ACTIVE_POST
}

export interface IInitSetActivePost extends ISetActivePostAction {
    type: typeof actionTypes.INIT_SET_ACTIVE_POST
}

export type IInitBlogAction =
    IInitSetPosts |
    IInitIncPageNumber |
    IInitSetHasMore |
    IInitSetLoading |
    IInitSetError |
    IInitSetPatterns |
    IInitSetActivePost

export type IBlogAction =
    ISetPosts |
    IIncPageNumber |
    ISetHasMore |
    ISetLoading |
    ISetError |
    ISetPatterns |
    ISetActivePost