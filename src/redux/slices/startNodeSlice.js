import { createSlice } from "@reduxjs/toolkit";

export const startNodeSlice = createSlice({
    name:"startNode",
    initialState: {
       startNode : {row:9, col:10}
    },
    reducers : {
        setStartNode : (state,action) => {
            state.startNode = action.payload;
        }
    }
});

export const {setStartNode} = startNodeSlice.actions;

export default startNodeSlice.reducer;