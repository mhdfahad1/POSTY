import { configureStore } from "@reduxjs/toolkit";
import SaveReducer from "./SavedSlice";
import SavedSlice from "./SavedSlice";

const store =configureStore({
    reducer:{
        SaveReducer:SavedSlice


    }
})

export default store;