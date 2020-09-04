import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    pattern: {
        width: '100%',
        height: '700px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        position: 'relative'
    },
    half: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
    },
    quarter: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    postWrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        padding: '10px',
        boxSizing: 'border-box'
    }
}))