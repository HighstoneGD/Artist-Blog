import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    background: {
        // backgroundImage: 'url(https://yourcmc.ru/wiki/images/a/a9/Example.jpg)',
        backgroundSize: 'cover',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '10px',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%'
    },
    wrapper: {
        padding: '10px',
        boxSizing: 'border-box'
    },
    vertical: {
        width: '50%',
        height: '100%',
    },
    horizontal: {
        width: '100%',
        height: '100%'
    },
    cover: {
        borderRadius: '10px',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
        },
    },
    title: {
        color: theme.palette.primary.light
    },
    button: {
        margin: '15px'
    }
}))