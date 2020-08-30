import React, { useState } from 'react'
import useStyles from './style'
import { IPostProps, Orientation } from './types'
import { Button } from '@material-ui/core'

export const Post: React.FC<IPostProps> = props => {
    const [hover, setHover] = useState<boolean>(false)
    const classes = useStyles()
    
    return (
        <div className = { 
            props.orientation === Orientation.horizontal ? 
                `${ classes.wrapper } ${ classes.horizontal }` :
                `${ classes.wrapper } ${ classes.vertical }`}>
            <div className = { classes.background }>
                <div 
                    className = { classes.cover }
                    onMouseEnter = { () => setHover(true) }
                    onMouseLeave = { () => setHover(false) }>
                    <h2 className = { classes.title }>{ props.body }</h2>
                    { hover && <Button
                        className = { classes.button }
                        variant = "outlined"
                        color = "secondary">Read more</Button>
                    }
                </div>
            </div>
        </div>
    )
}