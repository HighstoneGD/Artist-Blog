import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        position: 'relative'
    },
    page: {
        width: '100%',
        height: 'auto',
        display: 'block',
        padding: '20px 20px 70px 20px',
    }
})

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