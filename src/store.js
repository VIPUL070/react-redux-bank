import {configureStore} from '@reduxjs/toolkit'
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

//combine all the reducer for single redux store value
const store = configureStore({
    reducer : {
        account : accountReducer,
        customer : customerReducer
    }
});

export default store;
