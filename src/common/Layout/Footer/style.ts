import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '7vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.dark
    },
    iconsContainer: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    icon: {
        margin: '10px',
        width: '30px',
        height: '30px',
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))