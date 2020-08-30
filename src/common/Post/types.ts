import { IPost } from '../index'

export enum Orientation {
    vertical,
    horizontal
}

export interface IPostProps {
    orientation: Orientation,
    body: IPost
}