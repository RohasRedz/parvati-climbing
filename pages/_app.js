import { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import Loader from '../components/Loader';

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader once the app is mounted
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      {isLoading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}