import { useEffect, useState } from 'react';
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
      {isLoading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}