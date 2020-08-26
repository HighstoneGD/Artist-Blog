import React, { useContext } from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext } from '../auth/AuthContext'
import { signOut } from '../auth/service'
import { Navigation } from './navigation/Navigation'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        width: '100vw',
        height: '70px',
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.dark
    },
    button: {
        margin: '5px'
    },
    link: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        marginRight: '20px',
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.dark,
            cursor: 'pointer'
        }
    },
    icon: {
        margin: '0 10px'
    }
}))

export const Header: React.FC = () => {
    const doSignOut = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        signOut()
            .then(() => {
                console.log('signed out')
                window.location.replace('/log-in')
            })
            .catch(error => alert(error))
    }

    const classes = useStyles()
    const currentUser = useContext(AuthContext)

    return (
        <div className = { classes.root }>
            <Navigation />
            { currentUser ? 
                <div className = { classes.link } onClick = { doSignOut }>
                    <span>Sign Out</span>
                    <ExitToAppIcon className = { classes.icon }/>
                </div> : 
                <Link className = { `${ classes.link } ${ classes.icon }` } to = "log-in">Login</Link> }
        </div>
    )
}