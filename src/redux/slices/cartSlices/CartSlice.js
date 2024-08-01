import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "../../thunk/CartThunk";

const initialState = {
    products: [],
    cart: [],
    loading: false,
    error: null
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builders) => {
        builders
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
