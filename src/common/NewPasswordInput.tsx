import React, { useState, useEffect } from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { numberRE, lowercaseRE, uppercaseRE } from '../util/validation'

export const NewPasswordInput: React.FC<{ password: string }> = props => {
    const [passwordStrength, setPasswordStrength] = useState<number>(0)

    const getColorByStrength = (theme: Theme) => {
        switch (passwordStrength) {
            case 0: return theme.palette.primary.light
            case 1: return theme.palette.error.main
            case 2: return theme.palette.secondary.main
            case 3: return theme.palette.success.main
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

    const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        strengthMeter: {
            width: '80%',
            height: 'auto',
            marginTop: '5px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start'
        },
        meterCell: {
            display: 'block',
            width: '75px',
            height: '5px',
            borderRadius: '5px',
            margin: '5px',
            backgroundColor: getColorByStrength(theme)
        },
        disabledCell: {
            backgroundColor: theme.palette.primary.light
        }
    }))

    const classes = useStyles()

    useEffect(() => {
        setPasswordStrength(
            [numberRE, lowercaseRE, uppercaseRE].map(rule => {
                return rule.test(props.password)
            })
            .map<number>(result => result ? 1 : 0)
            .reduce((prev, curr) => prev + curr)
        )
    }, [props.password])

    return (
        <div className = { classes.root }>
            { props.children }
            <div className = { classes.strengthMeter }>
                <span className = { classes.meterCell }/>
                <span className = { passwordStrength > 1 ? classes.meterCell : `${ classes.meterCell } ${ classes.disabledCell }` }/>
                <span className = { passwordStrength === 3 ? classes.meterCell : `${ classes.meterCell } ${ classes.disabledCell }` }/>
            </div>
            <p>{ getTextByStrength() }</p>
        </div>
    )
}