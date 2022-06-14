// Base
import { AppProps } from 'next/app';
import Head from 'next/head';
// Base end

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';
// MUI END

// Own Components
import Layout from '../components/common/layout/layout';
// Own Components end

// Context
import { RecipesProvider } from 'context/RecipesProvider';
// Context end

// Styles
import theme from '../styles/ts/theme';
import './styles.css';
// Styles end

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nubimetrics!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecipesProvider>
          <main className="app">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </RecipesProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
