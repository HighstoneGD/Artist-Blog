import React, { useState, useEffect } from 'react'
import useStyles from './style'
import { numberRE, lowercaseRE, uppercaseRE } from '../../../util/validation'

export const NewPasswordInput: React.FC<{ password: string }> = props => {
    const [passwordStrength, setPasswordStrength] = useState<number>(0)
    const classes = useStyles()

    const getClassByStrength = (spanNumber: number) => {
        switch (passwordStrength) {
            case 0: return `${ classes.meterCell } ${ classes.empty }`
            case 1: return `${ classes.meterCell } ${ spanNumber === 0 ? classes.weak : classes.empty }`
            case 2: return `${ classes.meterCell } ${ spanNumber < 2 ? classes.middle : classes.empty }`
            case 3: return `${ classes.meterCell } ${ classes.strong }`
        }
    }

    const getTextByStrength = () => {
        switch (passwordStrength) {
            case 0: return 'Enter password'
            case 1: return 'Your password is very weak'
            case 2: return 'Your password is weak'
            case 3: return 'Your password is strong'
        }
    }

    useEffect(() => {
        if (props.password !== undefined) {
            setPasswordStrength(
                [numberRE, lowercaseRE, uppercaseRE].map(rule => {
                    console.log(props.password)
                    console.log(rule.test(props.password))
                    return rule.test(props.password)
                })
                .map<number>(result => result ? 1 : 0)
                .reduce((prev, curr) => prev + curr)
            )
        } else {
            setPasswordStrength(0)
        }
    }, [props.password])

    return (
        <div className = { classes.root }>
            { props.children }
            <div className = { classes.strengthMeter }>
                <span className = { getClassByStrength(0) }/>
                <span className = { getClassByStrength(1) }/>
                <span className = { getClassByStrength(2) }/>
            </div>
            <p>{ getTextByStrength() }</p>
        </div>
    )
}