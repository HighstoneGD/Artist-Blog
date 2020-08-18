import React, { FocusEvent, useState } from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'

export const TextInput: React.FC<ITextInputProps> = props => {
    const [isValid, setIsValid] = useState<boolean | undefined>()
    const [errorMessage, setErrorMessage] = useState<string>('')

    const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            width: '100%',
            height: '40px',
            padding: '0 22px 1px',
            boxSizing: 'border-box',
            border: `2px solid ${ isValid ? 
                theme.palette.success.main : 
                isValid === undefined ? theme.palette.primary.dark : theme.palette.error.main 
            }`,
            borderRadius: '40px',
            fontSize: '16px',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
            outline: 'none',
            '&:focus': {
                border: `2px solid ${ theme.palette.secondary.main }`
            }
        },
        container: {
            position: 'relative',
            width: '80%',
            height: 'auto',
        },
        errorMessage: {
            margin: '10px 0',
            height: errorMessage === '' ? '0' : '20px',
            display: isValid ? 'none' : 'block',
            color: theme.palette.error.main
        }
    }))

    const classes = useStyles()

    const validate = (event: FocusEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement
        if (target.value === '') {
            setErrorMessage(`Please enter a(an) ${ props.name }`)
            setIsValid(false)
        } else if (props.min && target.value.length < props.min) {
            setErrorMessage(`Please enter a long enough ${ props.name }`)
            setIsValid(false)
        } else if (props.max && target.value.length > props.max) {
            setErrorMessage(`Your ${ props.name } is too long`)
            setIsValid(false)
        } else if (props.rule && !props.rule.test(target.value)) {
            setErrorMessage(`Please enter a valid ${ props.name }`)
            setIsValid(false)
        } else {
            setErrorMessage('')
            setIsValid(true)
        }
    }

    return (
        <div className = { classes.container }>
            <input
                className = { classes.root }
                type = { props.type }
                required = { props.required }
                placeholder = { props.name }
                onChange = { event => props.changed(event) }
                onBlur = { validate }/>
            <div className = { classes.errorMessage }>{ errorMessage }</div>
        </div>
    )
}

interface ITextInputProps {
    name: string,
    changed: Function,
    required?: boolean,
    rule?: RegExp,
    type: string,
    min?: number,
    max?: number
}