import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import cartReducer from '../reducers/cartReducer';
import authReducer from '../reducers/authReducer';
import uiReducer from '../reducers/uiReducer';
import productReducer from '../reducers/productReducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        auth: authReducer,
        ui: uiReducer,
        products: productReducer,
    },
});

export default store;
 
