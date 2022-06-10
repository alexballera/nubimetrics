// Base
import Image from 'next/image';
import { PropsWithChildren, useEffect, useState } from 'react';
// Base end

// MUI
import { Box, Grid } from '@mui/material';
// MUI end

// Styles
import theme, {
  navbarHeight,
  sidebarHeight,
  sidebarWidth,
} from 'styles/ts/theme';
// Styles end

// Own components
import Navbar from '../navbar/navbar';
// Own components end

export interface LayoutProps {
  children?: JSX.Element;
}

const ratio = sidebarWidth / sidebarHeight;

export function Layout(props: PropsWithChildren<LayoutProps>): JSX.Element {
  const { children } = props;
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const heigth = window.innerHeight;
    setInnerHeight(heigth - navbarHeight);
  }, []);

  const styles = {
    bannerContainer: {
      mt: navbarHeight / 8,
      display: { xs: 'none', md: 'block' },
      width: innerHeight * ratio,
      height: innerHeight,
      '& img': {
        position: 'fixed',
        width: innerHeight * ratio,
      },
    },
    contentContainer: {
      mt: navbarHeight / 8,
      width: '100%',
      py: 32 / 8,
      px: 48 / 8,
      [theme.breakpoints.up('md')]: {
        height: innerHeight,
        width: `calc(100% - ${innerHeight * ratio}px)`,
        overflowY: 'auto',
      },
    },
  };

  return (
    <Box>
      <Navbar />
      <Grid container direction="row">
        <Grid item sx={styles.bannerContainer}>
          <Image
            src="/images/banner.png"
            alt="Banner sidebar"
            width={innerHeight * ratio}
            height={innerHeight}
            layout="responsive"
            priority
          />
        </Grid>
        <Grid item sx={styles.contentContainer}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
