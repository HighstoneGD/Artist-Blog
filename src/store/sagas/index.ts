import { all } from 'redux-saga/effects'
import blogSaga from './blog'

export default function* root() {
    yield all([
        blogSaga()
    ])
}