import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    page: {
        width: '100%',
        minHeight: '85vh',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        boxSizing: 'border-box'
    }
}))