import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
    form: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '500px',
        },
        height: 'auto',
        display: "flex",
        flexFlow: "column",
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '10px 0',
        margin: '20px',
    },
    textInput: {
        width: '80%',
        margin: '5px 0',
        '& label': {
            color: theme.palette.primary.light,
            '&.Mui-focused': {
                color: theme.palette.secondary.main,
            }
        },
        '&:hover label': {
            color: theme.palette.secondary.main,
        },
        '& .MuiOutlinedInput-root': {
            color: theme.palette.primary.light,
            '& fieldset': {
              borderColor: theme.palette.primary.light,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.secondary.main,
            },
            '&:hover.Mui-error fieldset': {
                borderColor: theme.palette.secondary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.secondary.main,
            },
        },
    },
    correctlyFilled: {
        '& label': {
            color: theme.palette.success.main,
            '&.Mui-focused': {
                color: theme.palette.secondary.main,
            }
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.success.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.secondary.main,
            }
        },
    },
    button: {
        width: '50%',
        marginTop: '5px',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    error: {
        color: theme.palette.error.main
    }
}))