import { createSlice } from "@reduxjs/toolkit";


const initState = {value : 1};

const countSlice = createSlice({
    name : "counter",
    initialState : initState,
    reducers : {
        increase : (state, action) => {
            state.value += action.payload;
        },
        decrease : (state, action) => {
            state.value -= action.payload;
        },
        toggleCounter : () => {}
    },
});


export default countSlice.reducer;

export const {increase, decrease} = countSlice.actions;

