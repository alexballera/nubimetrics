// Base
import Image from 'next/image';
// Base end

// MUI
import { AppBar, Toolbar } from '@mui/material';
// MUI END

// Styles
import styles from './navbar.module.scss';
// Styles end

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles['container']}>
      <AppBar position="sticky" color="inherit" elevation={0}>
        <Toolbar disableGutters={true}>
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={116}
            height={81}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
