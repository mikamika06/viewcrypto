import { type FC } from 'react';

import '../assets/styles/main.css';
import {
  LoaderProvider,
  MantineProvider,
  SWRProvider,
} from '@/lib/Provider';
import Routes from '@/routes';
import { Analytics } from '@vercel/analytics/react';

const App: FC = () => {
  return (
    <MantineProvider>
      <LoaderProvider>
        <SWRProvider>
          <Routes />
        </SWRProvider>
      </LoaderProvider>
      <Analytics />
    </MantineProvider>
  );
};

export default App;
