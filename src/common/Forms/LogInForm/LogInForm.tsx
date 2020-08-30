import React from 'react'
import { useForm, FieldError } from 'react-hook-form'
import { TextField, Button } from '@material-ui/core'
import { emailRE } from '../../../util/validation'
import useStyles from './style'
import { ILogInInputs } from './types'

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