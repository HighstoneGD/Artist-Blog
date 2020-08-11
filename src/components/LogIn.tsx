import React, { useState } from 'react'
import { TextField, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { validateEmail, validateForm } from '../util/validation'
import { logIn } from '../auth/service'
import { withRouter, Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: "column",
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    form: {
        display: "flex",
        flexFlow: "column",
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '500px',
        height: '250px'
    },
    input: {
        width: '90%',
    },
    button: {
        width: '50%',
    }
})

const LogIn = (props: any) => {
    const [inputs, setInputs] = 
        useState<{ email: string, password: string }>({ email: '', password: '' })
    const classes = useStyles()

    const doLogIn = () => {
        if (validateForm(inputs)) {
            logIn(inputs)
                .then(() => props.history.push('/'))
                .catch(error => alert(error))
        }
    }

    return (
        <div className = { classes.root }>
            <h1>Log In</h1>
            <Paper elevation = { 2 }>
                <form className = { classes.form }>
                    <TextField 
                        className = { classes.input }
                        variant = "outlined"
                        label = "Email" 
                        error = { !validateEmail(inputs.email) }
                        onChange = { (event) => { setInputs({ ...inputs, email: event.target.value }) } }
                        required/>
                    <TextField 
                        className = { classes.input }
                        type = "password"
                        variant = "outlined"
                        label = "Password"
                        onChange = { (event) => { setInputs({ ...inputs, password: event.target.value }) } }
                        required/>
                    <Button 
                        color = "primary"
                        className = { classes.button }
                        variant = "contained"
                        onClick = { doLogIn }>Log In</Button>
                    <Link to = "/sign-up">Sign Up</Link>
                </form>
            </Paper>
        </div>
    )
}

export default withRouter(LogIn)