/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import  AppNavigation from './src/config/Navigation'
import {Provider} from 'react-redux'
import store from './src/Services/Store'



const App =()=> {
  return (
      <Provider store={store} >
       <AppNavigation/>
      </Provider>
   
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },

});

export default App;





/// <<<<<<<<<<<<<<<<<<<<<<<<<<< RW ForApp.js >>>>>>>>>

/*

// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootreducer from './src/Services/reducer/rootreducer'


// const store = createStore(rootreducer)


*/ 