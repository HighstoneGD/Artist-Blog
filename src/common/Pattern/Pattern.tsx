import React from 'react'
import useStyles from './style'
import { IPatternProps } from './types'
import { Post, Orientation } from '../index'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

export const Pattern: React.FC<IPatternProps> = props => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const posts: (JSX.Element | null)[] = props.posts.map((post, index) => {
        return <Post 
            orientation = { index > 1 ? Orientation.vertical : Orientation.horizontal }
            body = { post }
            activate = { () => { dispatch(actions.setActivePost(post.id)) } }/> 
    })

    if (posts.length < 6) {
        for (let i = 0; i < 6 - posts.length; i++) {
            posts.push(null)
        }
    }
    
    return (
        <div className = { classes.pattern }>
            <div 
                className = { classes.half }
                style = { { flexDirection: 'column' } }>
                <div 
                    className = { classes.quarter }
                    style = { { height: '40%' } }>
                    { posts[0] }
                </div>
                <div 
                    className = { classes.quarter }
                    style = { { height: '60%' } }>
                    { posts[2] }
                    { posts[3] }
                </div>
            </div>
            <div 
                className = { classes.half } 
                style = { 
                    props.posts.length === 6 ? 
                        { flexDirection: 'column-reverse' } : 
                        { flexDirection: 'column' } }>
                <div 
                    className = { classes.quarter }
                    style = { { height: '40%' } }>
                    { posts[1] }
                </div>
                <div 
                    className = { classes.quarter }
                    style = { { height: '60%' } }>
                    { posts[4] }
                    { posts[5] }
                </div>
            </div>
        </div>
    )
}