import '@fontsource-variable/inter';
import '../styles/globals.scss';
import Page from '../components/Page';

function MyApp({ Component, pageProps }) {
  const { meta, ...otherProps } = pageProps;

  return (
    <Page meta={meta}>
      <Component {...otherProps} />
  
    </Page>
  );
}

export default MyApp;
