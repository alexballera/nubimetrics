import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Variables
export const poppinsFontFamily = 'Poppins, Roboto, sans-serif';
export const navbarHeight = 80
export const sidebarHeight = 944
export const sidebarWidth = 342
export const logoWidth = 116

const defaultTheme: ThemeOptions = {
  typography: {
    fontFamily: poppinsFontFamily
  }
};

const theme = createTheme({
  ...defaultTheme
});

export default theme;
