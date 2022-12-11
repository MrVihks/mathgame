import '../styles/globals.css'
import Navbar from '../components/navbar';
import {useEffect, useState} from 'react'

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Navbar/>
        <Component {...pageProps} />
      </>
    );
  }
}