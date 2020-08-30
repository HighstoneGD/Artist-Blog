import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import background from '../../assets/photo/exhibition.jpg'

export default makeStyles((theme: Theme) => createStyles({
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
    },
    link: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.dark
        }
    }
}))