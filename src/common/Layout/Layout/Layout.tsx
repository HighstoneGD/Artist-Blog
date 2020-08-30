import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import useStyles from './style'

export const Layout: React.FC = (props) => {
    const classes = useStyles()
    return (
        <div className = { classes.root }>
            <Header />
            <div className = { classes.page }>
                { props.children }
            </div>
            <Footer />
        </div>
    )
}