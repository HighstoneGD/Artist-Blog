import React from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Layout } from '../common/Layout'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {}
}))

export const Home: React.FC = () => {
    const classes = useStyles()

    return (
        <Layout>
            <div className = { classes.root }>
                <h1>Home</h1>
            </div>
        </Layout>
    )
}