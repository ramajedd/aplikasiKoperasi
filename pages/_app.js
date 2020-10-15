import '../css/tailwind.css'
import useLayoutEffect from "./useIsomorphicLayoutEffect"
import React, { useState } from "react";
//import '../css/datePicker.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function MyAppXX({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState()
  useLayoutEffect(() => {
    setIsMounted(<MyAppXX/>)
  }, []);
  return <Component {...pageProps} />
};

export default MyApp