import {createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fff',
            dark: '#000'
        },
        secondary: {
            main: '#414141',
            light: '#818181',
            dark: '#414141',
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#000000',
        },
        divider: '#000000',
    },
});

export default lightTheme