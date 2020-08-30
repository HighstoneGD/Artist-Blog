import React from 'react'
import useStyles from './style'
import { Layout } from '../../common'

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