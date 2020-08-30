import React from 'react'
import useStyles from './style'
import { signUp, createDBUser } from '../../auth/service'
import { RouteComponentProps, Link } from 'react-router-dom'
import { SignUpForm, ISignUpInputs } from '../../common'

export const SignUp: React.FC<RouteComponentProps> = props => {
    const classes = useStyles()

    const doSignUp = (inputs: ISignUpInputs) => {
        signUp(inputs)
            .then((response) => {
                createDBUser(response.user)
            })
            .then(() => props.history.push('/'))
            .catch(error => alert(error))
    }

    return (
        <div className = { classes.root }>
            <div className = { classes.formContainer }>
                <h1>Create an account</h1>
                <SignUpForm action = { doSignUp }/>
                <p>Already have an account? <Link to = "/log-in" className = { classes.link }>Log In!</Link></p>
            </div>
        </div>
    )
}