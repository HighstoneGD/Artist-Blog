import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    pattern: {
        width: '100%',
        height: '700px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
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
    }
}))