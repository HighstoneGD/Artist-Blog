import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const Loading: React.FC = () => {
    const classes = useStyles()

    return (
        <div className = { classes.root }>
            <CircularProgress color = "secondary"/>
        </div>
    )
}