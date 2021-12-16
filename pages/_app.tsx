import { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../store';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <title>Registry's TodoList</title>
      <GlobalStyle />
      <Header />
      <Footer />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
