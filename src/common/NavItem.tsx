import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        display: 'block',
        height: '80%',
        margin: '10%',
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    },
    active: {
        color: '#e74c3c'
    }
})

const NavItem = (props: { to: string, children: React.ReactNode }) => {
    const classes = useStyles()
    return (
        <div className = { classes.root }>
            <NavLink
                className = { classes.link }
                to = { props.to }
                exact
                activeClassName = { classes.active }>{ props.children }</NavLink>
        </div>
    )
}

export default NavItem