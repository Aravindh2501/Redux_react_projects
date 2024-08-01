import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCount: (state) => {
            state.count += 1;
        },
        subCount: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        resetCount: (state) => {
            state.count = 0;
        },
    },
});

export const { addCount, subCount, resetCount } = counterSlice.actions;
export default counterSlice.reducer;
