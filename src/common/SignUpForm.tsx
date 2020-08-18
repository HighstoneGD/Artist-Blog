import React, { useState } from 'react'
import { Button, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { emailRE, validateSignUpForm } from '../util/validation'
import { Link } from 'react-router-dom'
import { TextInput } from './TextInput'
import { ILogInForm } from './LogInForm'
import { NewPasswordInput } from './NewPasswordInput'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            height: 'auto'
        },
        [theme.breakpoints.up('sm')]: {
            width: '500px',
            height: '400px',
        },
        display: "flex",
        flexFlow: "column",
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '10px 0',
        margin: '20px'
    },
    button: {
        width: '50%',
        backgroundColor: theme.palette.secondary.main,
        '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.main
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    link: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.dark
        }
    },
    error: {
        color: theme.palette.error.main
    }
}))

export const SignUpForm: React.FC<ISignUpFormProps> = (props) => {
    const [inputs, setInputs] = useState<ISignUpForm>({ 
        email: '', password: '', repeatPassword: ''
    })
    const [isFormValid, setIsFormValid] = useState<boolean>(false)
    const classes = useStyles()

    const sendForm = () => {
        if (inputs.email && inputs.password && emailRE.test(inputs.email)) {
            props.action(inputs)
        } 
    }

    const emailChangedHandler = (event: Event) => {
        const target = event.target as HTMLInputElement
        setInputs({
            ...inputs, email: target.value 
        })
        setIsFormValid(validateSignUpForm(inputs))
    }

    const passwordChangedHandler = (event: Event) => {
        const target = event.target as HTMLInputElement
        setInputs({
            ...inputs, password: target.value 
        })
        setIsFormValid(validateSignUpForm(inputs))
    }

    const repeatPasswordChangedHandler = (event: Event) => {
        const target = event.target as HTMLInputElement
        setInputs({
            ...inputs, repeatPassword: target.value 
        })
        setIsFormValid(validateSignUpForm(inputs))
    }

    return (
        <form className = { classes.root }>
            <TextInput 
                name = "email address"
                changed = { emailChangedHandler }
                type = "email"
                rule = { emailRE }
                required
                max = { 49 }/>
            <NewPasswordInput password = { inputs.password }>
                <TextInput
                    name = "password"
                    changed = { passwordChangedHandler }
                    type = "password"
                    required
                    min = { 6 }/>
            </NewPasswordInput>
            <TextInput
                name = "password"
                changed = { repeatPasswordChangedHandler }
                type = "password"
                required
                min = { 6 }/>
            { !(inputs.password.localeCompare(inputs.repeatPassword) === 0) ? 
                <p className = { classes.error }>Passwords mismatch</p> : null }
            <Button
                className = { classes.button }
                disabled = { !isFormValid }
                variant = "contained"
                onClick = { sendForm }>Sign Up</Button>
            <p>Already have an account? <Link to = "/log-in" className = { classes.link }>Log In!</Link></p>
        </form>
    )
}

interface ISignUpFormProps {
    action: Function
}

export interface ISignUpForm extends ILogInForm {
    repeatPassword: string
}