import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button } from '@material-ui/core'
import Header from '../common/Header'
import { changeDBUserName, getDBUserSnapshot } from '../auth/service'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    textfield: {
        margin: '0 10px'
    }
})

const User: React.FC = () => {
    const classes = useStyles()
    const [user, setUser] = useState({ name: '', email: '' })

    const uid = useLocation().pathname.replace('/user', '')

    useEffect(() => {
        const promise = getDBUserSnapshot(uid)
        promise.then(snapshot => {
            if (snapshot?.exists()) setUser({ name: snapshot.val().name, email: snapshot.val().email })
        })
    }, [])

    return (
        <div className = { classes.root }>
            <Header /> 
            <h1>User</h1>
            <p>Email: { user.email }</p>
            <div>
                Your name:
                <TextField
                    className = { classes.textfield }
                    value = { user.name }
                    onChange = { event => setUser({ ...user, name: event.target.value }) }/>
                <Button
                    variant = "contained"
                    onClick = { () => { changeDBUserName(uid, user.name)  } }>Change name</Button>
            </div>
        </div>
    )
}

export default User