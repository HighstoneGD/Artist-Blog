import React from 'react'
import useStyles from './style'
import { Layout, Posts } from '../../common'

export const Blog: React.FC = () => {
    const classes = useStyles()

    return (
        <Layout>
            <div className = { classes.root }>
                <h1>Blog</h1>
                <Posts />
            </div>
        </Layout>
    )
}