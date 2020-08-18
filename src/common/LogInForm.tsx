import React, { useState } from 'react'
import { Button, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { emailRE, validateLogInForm } from '../util/validation'
import { Link } from 'react-router-dom'
import { TextInput } from './TextInput'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            height: 'auto'
        },
        [theme.breakpoints.up('sm')]: {
            width: '500px',
            height: '300px',
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
    }
}))

export const LogInForm: React.FC<ILogInFormProps> = (props) => {
    const [inputs, setInputs] = useState<ILogInForm>({ 
        email: '', password: ''
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
        setIsFormValid(validateLogInForm(inputs))
    }

    const passwordChangedHandler = (event: Event) => {
        const target = event.target as HTMLInputElement
        setInputs({
            ...inputs, password: target.value 
        })
        setIsFormValid(validateLogInForm(inputs))
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
            <TextInput
                name = "password"
                changed = { passwordChangedHandler }
                type = "password"
                required
                min = { 6 }/>
            <Button
                className = { classes.button }
                disabled = { !isFormValid }
                variant = "contained"
                onClick = { sendForm }>Log In</Button>
            <p>Don`t have an account? <Link to = "/sign-up" className = { classes.link }>Sign Up!</Link></p>
        </form>
    )
}

interface ILogInFormProps {
    action: Function
}

export interface ILogInForm {
    email: string,
    password: string
}