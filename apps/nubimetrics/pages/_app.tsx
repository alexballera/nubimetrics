import { AppProps } from 'next/app';
import Head from 'next/head';
/// MUI COMPONENTS
import { ThemeProvider } from '@mui/material';
/// MUI COMPONENTS END
import './styles.css';
import theme from '../styles/ts/theme';
import Layout from '../components/layout/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nubimetrics!</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main className="app">
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
