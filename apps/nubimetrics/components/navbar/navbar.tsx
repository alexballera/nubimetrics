// Base
import Image from 'next/image';
// Base end

// MUI
import { AppBar, Box, Toolbar } from '@mui/material';
// MUI END

export function Navbar(): JSX.Element {
  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar disableGutters={true}>
        <Box sx={{ width: 116, height: 81 }}>
          <Image
            src="/images/logo.png"
            alt="Navbar logo"
            width={116}
            height={81}
            layout="responsive"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
