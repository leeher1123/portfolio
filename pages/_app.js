import '../styles/globals.css';
import Header from '../src/shared/components/header/Header';
import BackTop from '../src/shared/components/button/BackTop';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <BackTop />
    </>
  );
}

export default MyApp;
