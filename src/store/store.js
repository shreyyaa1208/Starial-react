import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
const combinedReducer = combineReducers({
    cart: cartSlice
})

const store = configureStore({
    reducer: combinedReducer
})

export default store;