import { configureStore} from "@reduxjs/toolkit";

import startNodeSlice from "./slices/startNodeSlice";
import endNodeSlice from "./slices/endNodeSlice";
import setStartNodeSlice from "./slices/setStartNodeSlice";

const store = configureStore({
    reducer:{
        startNodeSlice: startNodeSlice,
        endNodeSlice : endNodeSlice,
        setStartNodeSlice:setStartNodeSlice,
    }
})

export default store;