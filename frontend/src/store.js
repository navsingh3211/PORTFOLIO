/* eslint-disable default-case */
import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./components/Register/registerSlice";

/*
configureStore
i.) automatically combine the reducer
ii.) it automatically work like redux thunk (and corresponding async operation)
iii.) do the work like composeWithDevTools
*/

const store = configureStore({
    reducer:{
        register:registerReducer
    }
});




export default store;