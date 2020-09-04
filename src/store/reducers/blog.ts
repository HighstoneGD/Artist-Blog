import { IBlogState } from '../types'
import * as actionTypes from '../actions/actionTypes'
import * as types from '../actions/types'

const initialState: IBlogState = {
    posts: [],
    pageNumber: 1,
    hasMore: true,
    loading: true,
    error: false,
    patterns: [],
    activePostId: null
}

export default (state = initialState, action: types.IBlogAction): IBlogState => {
    switch(action.type) {
        case actionTypes.SET_POSTS: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    ...action.payload.posts
                ]
            }
        }
        case actionTypes.INC_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        }
        case actionTypes.SET_HAS_MORE: {
            return {
                ...state,
                hasMore: action.payload.hasMore
            }
        }
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                loading: action.payload.loading
            }
        }
        case actionTypes.SET_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        case actionTypes.SET_PATTERNS: {
            return {
                ...state,
                patterns: action.payload.patterns
            }
        }
        case actionTypes.SET_ACTIVE_POST: {
            return {
                ...state,
                activePostId: action.payload.id
            }
        }
        default: return state
    }
}