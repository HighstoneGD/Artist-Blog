import { rootReducer } from '../index'
import { IPost } from '../common'

export type RootState = ReturnType<typeof rootReducer>

export interface IBlogState {
    posts: IPost[],
    pageNumber: number,
    hasMore: boolean,
    loading: boolean,
    error: boolean,
    patterns: IPost[][],
    activePostId: number | null
}