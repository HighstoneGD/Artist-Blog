import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AuthContext } from '../auth/AuthContext'
import { signOut } from '../auth/service'
import NavItem from './NavItem'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        width: '100vw',
        height: '50px'
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'left',
        height: '100%'
    },
    button: {
        margin: '5px'
    }
})

const Header: React.FC = () => {
    const doSignOut = () => {
        signOut()
            .then(() => {
                console.log('signed out')
                window.location.replace('/log-in')
            })
            .catch(error => alert(error))
    }

    const classes = useStyles()
    const currentUser = useContext(AuthContext)
    const button =
        currentUser ?
            <Button className = { classes.button } variant = "contained" onClick = { doSignOut }>Sign Out</Button> :
            null
    const navItems = [ {
            name: 'Home',
            to: '/'
        }
    ]

    if (currentUser?.isAdmin) navItems.push({
        name: 'Users',
        to: '/table'
    })

    return (
        <div className = { classes.root }>
            <nav className = { classes.nav }>
                { navItems.map(item => {
                    return <NavItem to = { item.to }>{ item.name }</NavItem>
                }) }
            </nav>
            { button }
        </div>
    )
}

export default Header