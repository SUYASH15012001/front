/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Index from './screens/Index';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Index styles={styles.main} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
