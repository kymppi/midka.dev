import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="midka.eu.auth0.com"
      clientId="2MxaNaas6O3xBAV8aoZtK6ehvXAnt7EA"
      redirectUri="http://localhost:3000/"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
