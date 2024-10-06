import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice'
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";

const store = configureStore({
    reducer :{
        auth : authReducer,
        product : productSlice,
        cart : cartSlice
    }
});

export default store;