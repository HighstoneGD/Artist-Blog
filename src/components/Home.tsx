import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button } from '@material-ui/core'
import Header from '../common/Header'
import { AuthContext } from '../auth/AuthContext'
import { changeDBUserName } from '../auth/service'

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

const Home: React.FC = () => {
    const classes = useStyles()
    const currentUser = useContext(AuthContext)
    const [userName, setUserName] = useState(currentUser?.name)

    useEffect(() => {
        setUserName(currentUser?.name)
    }, [currentUser])

    return (
        <div className = { classes.root }>
            <Header /> 
            <h1>Home</h1>
            <p>Your email: { currentUser?.email }</p>
            <div>
                Your name:
                <TextField
                    className = { classes.textfield }
                    value = { userName }
                    onChange = { event => setUserName(event.target.value) }/>
                <Button
                    variant = "contained"
                    onClick = { () => { changeDBUserName(currentUser?.uid, userName)  } }>Change name</Button>
            </div>
        </div>
    )
}

export default Home