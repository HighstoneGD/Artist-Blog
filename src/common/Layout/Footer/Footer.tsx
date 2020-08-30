import React from 'react'
import { IconButton } from '@material-ui/core'
import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import useStyles from './style'

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