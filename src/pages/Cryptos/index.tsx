import { type FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Cryptos } from '@/features';

const CryptosPage: FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>ViewCrypto</title>
        <meta
          name='description'
          content='"ViewCrypto - an application for tracking cryptocurrencies'
        />
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <Cryptos />
    </HelmetProvider>
  );
};

export default CryptosPage;
