/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import '../../i18n';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
