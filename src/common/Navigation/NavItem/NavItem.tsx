import React from 'react'
import useStyles from './style'
import { NavLink } from 'react-router-dom'
import { INavItemProps } from '../types'

export const NavItem: React.FC<INavItemProps> = props => {
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