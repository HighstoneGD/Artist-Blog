import React from 'react'
import useStyles from './style'
import { logIn } from '../../auth/service'
import { RouteComponentProps, Link } from 'react-router-dom'
import { LogInForm } from '../../common'

export const LogIn: React.FC<RouteComponentProps> = props => {
    const classes = useStyles()

    const doLogIn = (inputs: { email: string, password: string }) => {
        logIn(inputs)
            .then(() => props.history.push('/'))
            .catch(error => alert(error))
    }

    return (
        <div className = { classes.root }>
            <div className = { classes.formContainer }>
                <h1>Login to your account</h1>
                <LogInForm action = { doLogIn }/>
                <p>Don`t have an account? <Link to = "/sign-up" className = { classes.link }>Sign Up!</Link></p>
            </div>
        </div>
    )
}