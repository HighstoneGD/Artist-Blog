import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
    },
    palette: {
        primary: {
            dark: '#324448',
            main: '#6b8b8d',
            light: '#f0f6f7',
        },
        secondary: {
            main: '#f9d268',
            dark: '#c99508'
        },
        error: {
            main: '#e74c3c'
        },
        success: {
            main: '#009432'
        }
    }
})