import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme, IconButton } from '@material-ui/core'
import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100vw',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.dark,
        position: 'absolute',
        bottom: '0'
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

export const Footer: React.FC = () => {
    const classes = useStyles()

    return (
        <div className = { classes.root }>
            <div className = { classes.iconsContainer }>
                <a href = "https://facebook.com" target = "blank">
                    <IconButton className = { classes.icon } color = "secondary">
                        <Facebook />
                    </IconButton>
                </a>
                <a href = "https://instagram.com" target = "blank">
                    <IconButton className = { classes.icon } color = "secondary">
                        <Instagram />
                    </IconButton>
                </a>
                <a href = "https://pinterest.com" target = "blank">
                    <IconButton className = { classes.icon } color = "secondary">
                        <Pinterest />
                    </IconButton>
                </a>
                <a href = "https://twitter.com" target = "blank">
                    <IconButton className = { classes.icon } color = "secondary">
                        <Twitter />
                    </IconButton>
                </a>
            </div>
        </div>
    )
}