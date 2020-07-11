import * as React from 'react';
import { Provider } from 'react-redux';

import { makeStore } from '@redux/store';
import Navigation from './Navigation';

const App = () => {
  const store = makeStore();

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
