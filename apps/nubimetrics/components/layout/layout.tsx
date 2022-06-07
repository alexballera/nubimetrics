// Base
import Image from 'next/image';
import { PropsWithChildren } from 'react';
// Base end

// MUI
import { Box, Grid, styled } from '@mui/material';
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

const Content = styled(Grid)({
  paddingTop: navbarHeight,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${sidebarWidth}px)`,
  },
});

export function Layout(props: PropsWithChildren<LayoutProps>): JSX.Element {
  const { children } = props;
  return (
    <Box>
      <Navbar />
      <Grid container direction="row">
        <Grid item>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              mt: navbarHeight / 8,
            }}
          >
            <Image
              src="/images/banner.png"
              alt="Banner sidebar"
              width={sidebarWidth}
              height={sidebarHeight}
            />
          </Box>
        </Grid>
        <Content
          item
          sx={{
            height: navbarHeight,
          }}
        >
          <Box
            component="div"
            sx={{
              width: '100%',
              height: sidebarHeight,
              overflowY: 'auto',
            }}
          >
            {children}
          </Box>
        </Content>
      </Grid>
    </Box>
  );
}

export default Layout;
