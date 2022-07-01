/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Router';
import {name as appName} from './app.json';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import * as React from 'react';

const root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => root);
