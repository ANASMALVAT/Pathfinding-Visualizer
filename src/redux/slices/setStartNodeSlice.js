import { createSlice } from "@reduxjs/toolkit";

export const setStartNodeSlice = createSlice({
    name:"setStartNode",
    initialState: {
       isStart : false
    },
    reducers : {
        toggelStart : (state) => {
            state.isStart = !state.isStart;
        }
    }
});

export const {toggelStart} = setStartNodeSlice.actions;

export default setStartNodeSlice.reducer;