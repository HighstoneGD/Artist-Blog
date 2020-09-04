import { put, takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import * as types from '../actions/types'

export function* setPosts(action: types.IInitSetPosts) {
    yield put({
        type: actionTypes.SET_POSTS,
        payload: {
            posts: action.payload.posts
        }
    })
}

export function* watchSetPosts() {
    yield takeEvery(actionTypes.INIT_SET_POSTS, setPosts)
}

export function* setPageNumber(action: types.IInitIncPageNumber) {
    yield put({
        type: actionTypes.INC_PAGE_NUMBER
    })
}

export function* watchSetPageNumber() {
    yield takeEvery(actionTypes.INIT_INC_PAGE_NUMBER, setPageNumber)
}

export function* setHasMore(action: types.IInitSetHasMore) {
    yield put({
        type: actionTypes.SET_HAS_MORE,
        payload: {
            hasMore: action.payload.hasMore
        }
    })
}

export function* watchSetHasMore() {
    yield takeEvery(actionTypes.INIT_SET_HAS_MORE, setHasMore)
}

export function* setLoading(action: types.IInitSetLoading) {
    yield put({
        type: actionTypes.SET_LOADING,
        payload: {
            loading: action.payload.loading
        }
    })
}

export function* watchSetLoading() {
    yield takeEvery(actionTypes.INIT_SET_LOADING, setLoading)
}

export function* setError(action: types.IInitSetError) {
    yield put({
        type: actionTypes.SET_ERROR,
        payload: {
            error: action.payload.error
        }
    })
}

export function* watchSetError() {
    yield takeEvery(actionTypes.INIT_SET_ERROR, setError)
}

export function* setPatterns(action: types.IInitSetPatterns) {
    yield put({
        type: actionTypes.SET_PATTERNS,
        payload: {
            patterns: action.payload.patterns
        }
    })
}

export function* watchSetPatterns() {
    yield takeEvery(actionTypes.INIT_SET_PATTERNS, setPatterns)
}

export function* setActivePost(action: types.IInitSetActivePost) {
    yield put({
        type: actionTypes.SET_ACTIVE_POST,
        payload: {
            id: action.payload.id
        }
    })
}

export function* watchSetActivePost() {
    yield takeEvery(actionTypes.INIT_SET_ACTIVE_POST, setActivePost)
}

export default function* root() {
    yield all([
        watchSetPosts(),
        watchSetPageNumber(),
        watchSetHasMore(),
        watchSetLoading(),
        watchSetError(),
        watchSetPatterns(),
        watchSetActivePost()
    ])
}