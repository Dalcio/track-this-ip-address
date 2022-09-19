import { AppProps } from 'next/app';
import Head from 'next/head';
import useGlobalStyles from 'theme/globalCss';

const App = ({ Component, pageProps }: AppProps) => {
  useGlobalStyles();

  return (
    <>
      <Head>
        <title>Ip Address Tracker</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
