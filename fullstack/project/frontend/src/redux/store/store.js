import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice'
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
    reducer :{
        auth : authReducer,
        product : productSlice,
        cart : cartSlice,
        user : userSlice
    }
});

export default store;