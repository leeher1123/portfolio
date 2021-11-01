import '../styles/globals.css';
import Header from '../src/shared/components/header/Header';
import Footer from '../src/shared/components/footer/Footer';
import BackTop from '../src/shared/components/button/BackTop';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <BackTop />
    </>
  );
}

export default MyApp;
