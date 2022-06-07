/// MATERIAL UI
import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image';
/// MATERIAL UI END
import styles from './navbar.module.scss';

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
