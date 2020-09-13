import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@shopify/restyle';

import { makeStore } from '@redux/store';
import theme from '@styles/theme';
import Navigation from './Navigation';

const App = () => {
  const { store, persistor } = makeStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
