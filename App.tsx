import React from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import NavigatorCont from './navigatorsFolder/navigatorCont';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigatorCont />
      </PersistGate>
    </Provider>
  );
};

export default App;
