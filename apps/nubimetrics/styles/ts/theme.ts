// MUI
import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// MUI end

// Variables
export const poppinsFontFamily = 'Poppins, Roboto, sans-serif';
export const navbarHeight = 80
export const sidebarHeight = 944
export const sidebarWidth = 342
export const logoWidth = 116
// Variables end

const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      light: '#0cb1b7',
      main: '#0C969D',
      dark: '#078084',
    },
  },
  typography: {
    fontFamily: poppinsFontFamily
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  }
};

const theme = createTheme({
  ...defaultTheme
});

export default theme;
