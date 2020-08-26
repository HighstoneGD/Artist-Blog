import React from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { NavItem } from './NavItem'
import { PrivateNavItem } from './PrivateNavItem'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'left',
        height: '100%',
        marginLeft: '20px'
    }
}))

export const Navigation: React.FC = props => {
    const classes = useStyles()

    return (
        <div className = { classes.root }>
            <NavItem to = "/">Home</NavItem>
            <PrivateNavItem isAdminRoute to = "table">Table</PrivateNavItem>
            <PrivateNavItem to = "my-account">My account</PrivateNavItem>
        </div>
    )
}