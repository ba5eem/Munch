import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hub from './src/Screens';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/Reducers'


//STORE--------------------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );





export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
            <Hub/>


      </Provider>
    );
  }
}