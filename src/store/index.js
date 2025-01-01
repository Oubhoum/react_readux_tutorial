import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './countSlice';
import authReducer from './authSlice';




const store = configureStore({reducer : {counter : counterReducer, auth : authReducer}});
export default store;
