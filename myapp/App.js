import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // ✅ Ye line hona chahiye

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
