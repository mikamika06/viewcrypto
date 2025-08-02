import { type FC } from 'react';

import '../assets/styles/main.css';
import {
  LoaderProvider,
  MantineProvider,
  SWRProvider,
} from '@/lib/Provider';
import Routes from '@/routes';

const App: FC = () => {
  return (
    <MantineProvider>
      <LoaderProvider>
        <SWRProvider>
          <Routes />
        </SWRProvider>
      </LoaderProvider>
    </MantineProvider>
  );
};

export default App;
