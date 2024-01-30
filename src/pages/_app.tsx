import React from 'react';
import Head from 'next/head';
import Page from '../components/Page';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

interface AppProps {
  Component: React.ElementType;
  pageProps: any;
}
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>CONFÍA | colaborando por tu libertad financiera.</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}
