import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        // increment: (state,action) =>{
        //     state = state +1
        // }
    }
});

export default counterSlice.reducer;