// Base
import Image from 'next/image';
// Base end

// Styles
import { logoWidth, navbarHeight } from 'styles/ts/theme';
// Styles end

// MUI
import { AppBar, Box, Toolbar } from '@mui/material';
// MUI END

export function Navbar(): JSX.Element {
  return (
    <AppBar position="fixed" color="inherit" elevation={0}>
      <Toolbar disableGutters={true}>
        <Box sx={{ width: logoWidth, height: navbarHeight }}>
          <Image
            src="/images/logo.png"
            alt="Navbar logo"
            width={logoWidth}
            height={navbarHeight}
            layout="responsive"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
