import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { theme } from '../helpers/theme';
import { SEOConfig } from '../next-seo.config';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <DefaultSeo {...SEOConfig} />
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default App;
