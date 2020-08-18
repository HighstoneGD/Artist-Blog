import React from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { logIn } from '../auth/service'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { LogInForm } from '../common/LogInForm'
import background from '../assets/photo/exhibition.jpg'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexFlow: "row",
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${ background })`,
        backgroundSize: 'cover'
    },
    formContainer: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            opacity: '0',
        },
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
        height: '100vh',
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        flexFlow: "column",
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.primary.light
    }
}))

const LogIn: React.FC<RouteComponentProps> = props => {
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
            </div>
        </div>
    )
}

export default withRouter(LogIn)