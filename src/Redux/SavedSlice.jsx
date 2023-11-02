import { createSlice } from "@reduxjs/toolkit";


const SavedSlice=createSlice({
    name:"saved",
    initialState:[],
    reducers:{
        addToSave:(state,action)=>{
             state.push(action)
        }
        
    }
})
export const {addToSave}=SavedSlice.actions
export default SavedSlice.reducer