import React from 'react'
import { useForm, FieldError } from 'react-hook-form'
import { TextField, Button } from '@material-ui/core'
import { NewPasswordInput } from '../NewPasswordInput/NewPasswordInput'
import { emailRE } from '../../../util/validation'
import useStyles from './style'
import { ISignUpInputs } from './types'

export const SignUpForm: React.FC<{ action: Function }> = props => {
    const { register, handleSubmit, errors, watch, getValues } = useForm<ISignUpInputs>({ mode: "onBlur" })
    const onSubmit = (data: ISignUpInputs) => props.action(data)
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
            <NewPasswordInput password = { watch("password") }>
                <TextField
                    className = { `${ classes.textInput } ${ !errors.password && !!watch('password') ? classes.correctlyFilled : '' }` }
                    inputRef = { register({ required: true, minLength: 6 }) }
                    variant = "outlined"
                    name = "password"
                    label = "Password"
                    type = "password"
                    error = { !!errors.password }/>
            </NewPasswordInput>
            { makeErrorMessages(errors.password, [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Password is too short' },
            ]) }
            <TextField
                className = { `${ classes.textInput } ${ !errors.repeatPassword && !!watch('repeatPassword') ? classes.correctlyFilled : '' }` }
                inputRef = { 
                    register({ 
                        required: true, 
                        validate: (value: string) => value.localeCompare(getValues("password")) === 0 
                    }) 
                }
                variant = "outlined"
                name = "repeatPassword"
                label = "Confirm password"
                type = "password"
                error = { !!errors.repeatPassword }/>
            { makeErrorMessages(errors.repeatPassword, [
                { type: 'required', message: 'You must confirm password' },
                { type: 'validate', message: 'Password mismatch' },
            ]) }
            <Button
                className = { classes.button }
                type = "submit">Sign Up</Button>
        </form>
    )
}

