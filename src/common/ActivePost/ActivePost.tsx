import React from 'react'
import useStyles from './style'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types'
import * as actions from '../../store/actions'
import { IPost, IActivePostProps } from '../index'

export const ActivePost: React.FC<IActivePostProps> = props => {
    const dispatch = useDispatch()
    const post = useSelector<RootState, IPost>(state => state.blog.posts[props.postId])

    const classes = useStyles()

    const scrollIntoView = (ref: HTMLDivElement | null) => {
        if (ref !== null) {
            console.log('rerender')
            window.scrollTo({ top: ref.offsetTop, behavior: 'smooth' })
        }
    }

    const offset = (Math.ceil((props.postId + 1) / 6) - 1) * 700

    return (
        <div className = { classes.root } ref = { ref => scrollIntoView(ref) } style = { { top: `${ offset }px` } }>
            <CloseIcon
                className = { classes.close }
                color = "secondary" 
                onClick = { () => dispatch(actions.setActivePost(null)) }/>
            <h2 className = { classes.title }>{ post.title }</h2>
        </div>
    )
}