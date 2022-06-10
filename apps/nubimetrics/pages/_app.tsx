// Base
import { AppProps } from 'next/app';
import Head from 'next/head';
// Base end

// MUI
import { ThemeProvider } from '@mui/material';
// MUI END

// Own Components
import Layout from '../components/layout/layout';
// Own Components end

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
        <main className="app">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
