/**
 * react native sample architecture application
 * 
 * This is the Starting point of the project. Initially, we setup redux, store and middlewares here. 
 * 
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import {createLogger} from 'redux-logger'
import {autoRehydrate, persistStore} from 'redux-persist'
import Navigator from './containers/Navigator'
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers'
import sagas from './sagas';
import NavigatorService from './lib/NavigatorService'

//store setup
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({predicate:(getstate,actions) => __DEV__});
function configureStore(initialState){
  const enhancer = compose(applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,),   
    autoRehydrate()
    );
    return createStore(reducer,initialState,enhancer);
}
const store = configureStore({});
// if persistance needed, uncomment below line
// persistStore(store, {storage: AsyncStorage,})
sagaMiddleware.run(sagas);
const action = type => store.dispatch({type})

export default class EntryPoint extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
         ref={navigatorRef => {
           NavigatorService.setContainer(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}