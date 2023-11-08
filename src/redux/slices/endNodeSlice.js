import { createSlice } from "@reduxjs/toolkit";

export const endNodeSlice = createSlice({
    name:"endNode",
    initialState: {
       endNode : {row:9, col:35}
    },
    reducers : {
        setEndNode : (state,action) => {
            state.endNode = action.payload;
        }
    }
});

export const {setEndNode} = endNodeSlice.actions;

export default endNodeSlice.reducer;