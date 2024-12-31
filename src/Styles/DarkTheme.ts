import {createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000',
            dark: '#fff'
        },
        secondary: {
            main: '#414141',
            light: '#818181',
            dark: '#414141',
        },
        background: {
            default: '#414141',
        },
        text: {
            primary: '#fff',
        },
        divider: '#fff',
    },
});

export default darkTheme