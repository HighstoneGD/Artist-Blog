import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        width: '100%',
        height: '8vh',
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.dark
    },
    button: {
        margin: '5px'
    },
    link: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        marginRight: '20px',
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.dark,
            cursor: 'pointer'
        }
    },
    icon: {
        margin: '0 10px'
    }
}))