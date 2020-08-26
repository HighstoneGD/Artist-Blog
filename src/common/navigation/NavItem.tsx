import React from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: '0 10px',
    },
    link: {
        color: theme.palette.primary.light,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    active: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.secondary.dark,
        }
    }
}))

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

export interface INavItemProps {
    to: string,
}