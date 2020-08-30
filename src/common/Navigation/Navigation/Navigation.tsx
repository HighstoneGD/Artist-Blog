import React from 'react'
import useStyles from './style'
import { NavItem } from '../NavItem/NavItem'
import { PrivateNavItem } from '../PrivateNavItem/PrivateNavItem'

export const Navigation: React.FC = props => {
    const classes = useStyles()

    return (
        <div className = { classes.root }>
            <NavItem to = "/">Home</NavItem>
            <NavItem to = "/blog">Blog</NavItem>
            <PrivateNavItem isAdminRoute to = "users">Table</PrivateNavItem>
            <PrivateNavItem to = "my-account">My account</PrivateNavItem>
        </div>
    )
}