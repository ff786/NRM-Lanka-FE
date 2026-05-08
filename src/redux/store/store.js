import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import authReducer from '../reducers/authReducer';
import uiReducer from '../reducers/uiReducer';
import productReducer from '../reducers/productReducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        ui: uiReducer,
        products: productReducer,
    },
});

export default store;
 