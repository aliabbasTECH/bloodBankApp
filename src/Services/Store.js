

import reducer from './reducer/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(reducer,  applyMiddleware(thunk))

export default store;





/*
constant.js

export const USER_DATA ='USER_DATA' // create String called USER_DATA and Save in USER_DATA const variable
export const  REMOVE_USER_DATA ='REMOVE_USER_DATA'

*/ 