import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
export const poppinsFontFamily = 'Poppins, Roboto, sans-serif';

const defaultTheme: ThemeOptions = {
  typography: {
    fontFamily: poppinsFontFamily
  }
};

const theme = createTheme({
  ...defaultTheme
});

export default theme;
