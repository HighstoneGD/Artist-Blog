import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
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
        justifyContent: 'center'
    },
    meterCell: {
        display: 'block',
        width: '75px',
        height: '5px',
        borderRadius: '5px',
        margin: '5px',
    },
    weak: {
        backgroundColor: theme.palette.error.main
    },
    middle: {
        backgroundColor: theme.palette.secondary.main
    },
    strong: {
        backgroundColor: theme.palette.success.main
    },
    empty: {
        backgroundColor: theme.palette.primary.light
    }
}))