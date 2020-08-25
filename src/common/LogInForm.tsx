import React from 'react'
import { useForm, FieldError } from 'react-hook-form'
import { TextField, Button, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { emailRE } from '../util/validation'

const useStyles = makeStyles((theme: Theme) => createStyles({
    form: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '500px',
        },
        height: 'auto',
        display: "flex",
        flexFlow: "column",
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '10px 0',
        margin: '20px',
    },
    textInput: {
        width: '80%',
        margin: '5px 0',
        '& label': {
            color: theme.palette.primary.light,
            '&.Mui-focused': {
                color: theme.palette.secondary.main,
            }
        },
        '&:hover label': {
            color: theme.palette.secondary.main,
        },
        '& .MuiOutlinedInput-root': {
            color: theme.palette.primary.light,
            '& fieldset': {
              borderColor: theme.palette.primary.light,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.secondary.main,
            },
            '&:hover.Mui-error fieldset': {
                borderColor: theme.palette.secondary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.secondary.main,
            },
        },
    },
    correctlyFilled: {
        '& label': {
            color: theme.palette.success.main,
            '&.Mui-focused': {
                color: theme.palette.secondary.main,
            }
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.success.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.secondary.main,
            }
        },
    },
    button: {
        width: '50%',
        marginTop: '5px',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    error: {
        color: theme.palette.error.main
    }
}))

export const LogInForm: React.FC<{ action: Function }> = props => {
    const { register, handleSubmit, errors, watch } = useForm<ILogInInputs>({ mode: 'onBlur' })
    const onSubmit = (data: ILogInInputs) => props.action(data)
    const classes = useStyles()

    const makeErrorMessages = (field: FieldError | undefined, messages: { type: string, message: string }[]) => {
        return messages.map(message => field?.type === message.type && (<span className = { classes.error }>{ message.message }</span>))
    }

    return (
        <form
            className = { classes.form }
            onSubmit = { handleSubmit(onSubmit) }>
            <TextField
                className = { `${ classes.textInput } ${ !errors.email && !!watch('email') ? classes.correctlyFilled : '' }` }
                inputRef = { register({ required: true, maxLength: 50, pattern: emailRE }) }
                variant = "outlined"
                name = "email"
                label = "Email"
                error = { !!errors.email }/>
            { makeErrorMessages(errors.email, [
                { type: 'required', message: 'Email is required' },
                { type: 'maxLength', message: 'Email is too long' },
                { type: 'pattern', message: 'Email is invalid' },
            ]) }
            <TextField
                className = { `${ classes.textInput } ${ !errors.password && !!watch('password') ? classes.correctlyFilled : '' }` }
                inputRef = { register({ required: true, minLength: 6 }) }
                variant = "outlined"
                type = "password"
                name = "password"
                label = "Password"
                error = { !!errors.password }/>
            { makeErrorMessages(errors.password, [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Password is too short' },
            ]) }
            <Button
                className = { classes.button }
                type = "submit">Log In</Button>
        </form>
    )
}

export interface ILogInInputs {
    email: string,
    password: string,
}