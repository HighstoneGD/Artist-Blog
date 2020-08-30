import React from 'react'
import { CircularProgress } from '@material-ui/core'
import useStyles from './style'

export const Loading: React.FC = () => {
    const classes = useStyles()

    return (
        <div className = { classes.root }>
            <CircularProgress color = "primary"/>
        </div>
    )
}