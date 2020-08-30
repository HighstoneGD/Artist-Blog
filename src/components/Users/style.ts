import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    table: {
        width: '90%'
    },
    icon: {
        position: 'absolute',
        marginLeft: '5px',
        bottom: '30%'
    }
}))