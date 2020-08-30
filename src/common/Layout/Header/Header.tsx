import React, { useContext } from 'react'
import useStyles from './style'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext } from '../../../auth/AuthContext'
import { signOut } from '../../../auth/service'
import { Navigation } from '../../Navigation/Navigation/Navigation'
import { Link } from 'react-router-dom'

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