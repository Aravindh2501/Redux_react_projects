import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listData: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addList: (state, action) => {
            const newList = {
                id: state.listData.length > 0 ? state.listData[state.listData.length - 1].id + 1 : 1,
                name: action.payload,
                isChecked: false,
            };
            state.listData.push(newList);
        },
        toggleChecked: (state, action) => {
            const item = state.listData.find(item => item.id === action.payload);
            if (item) {
                item.isChecked = !item.isChecked;
            }
        },
        deleteList: (state, action) => {
            const updatedList = state.listData.filter(item => item.id !== action.payload);
            state.listData = updatedList

        },
    },
});

export const { addList, toggleChecked, deleteList } = todoSlice.actions;
export default todoSlice.reducer;
