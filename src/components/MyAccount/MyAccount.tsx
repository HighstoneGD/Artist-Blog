import React, { useContext, useState, useEffect } from 'react'
import useStyles from './style'
import { TextField, Button } from '@material-ui/core'
import { AuthContext } from '../../auth/AuthContext'
import { changeDBUserName } from '../../auth/service'
import { Layout } from '../../common'

export const MyAccount: React.FC = () => {
    const classes = useStyles()
    const currentUser = useContext(AuthContext)
    const [userName, setUserName] = useState(currentUser?.name)

    useEffect(() => {
        setUserName(currentUser?.name)
    }, [currentUser])

    return (
        <Layout>
            <div className = { classes.root }>
                <h1>My Account</h1>
                <p>Email: { currentUser?.email }</p>
                <div>
                    Name:
                    <TextField
                        className = { classes.textfield }
                        value = { userName }
                        onChange = { event => setUserName(event.target.value) }/>
                    <Button
                        variant = "contained"
                        onClick = { () => { changeDBUserName(currentUser?.uid, userName)  } }>Change name</Button>
                </div>
            </div>
        </Layout>
    )
}