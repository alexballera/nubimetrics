// Base
import { PropsWithChildren } from 'react';
// Base end

//MUI
import { Box } from '@mui/material';
//MUI end

// Own components
import Navbar from '../navbar/navbar';
// Own components end

export interface LayoutProps {
  children?: JSX.Element;
}

export function Layout(props: PropsWithChildren<LayoutProps>): JSX.Element {
  const { children } = props;
  return (
    <Box>
      <Navbar />

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Sidebar</Box>
      <Box component="main" data-testid="main">
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
