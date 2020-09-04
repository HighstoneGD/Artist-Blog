import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '700px',
        borderRadius: '10px',
        backgroundColor: theme.palette.primary.dark,
        position: 'absolute',
        zIndex: 2
    },
    close: {
        margin: '10px',
        '&.MuiSvgIcon-root': {
            width: '30px',
            height: '30px'
        },
        '&:hover': {
            cursor: 'pointer',
            '&.MuiSvgIcon-colorSecondary': {
                color: theme.palette.secondary.dark
            }
        }
    },
    title: {
        color: theme.palette.primary.light
    }
}))