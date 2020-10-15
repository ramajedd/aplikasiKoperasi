import '../css/tailwind.css'
import useLayoutEffect from "./useIsomorphicLayoutEffect"
//import '../css/datePicker.css'

function MyAppXX({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function MyApp({ Component, pageProps }) {
  useLayoutEffect(() => {
    console.log('hello there');
  }, []);
  return <Component {...pageProps} />
};

export default MyApp