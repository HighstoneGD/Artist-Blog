import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: '0 10px',
    },
    link: {
        color: theme.palette.primary.light,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    active: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.secondary.dark,
        }
    }
}))