import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk(
    "Cart/fetchProducts",
    async () => {
        const response = await axios.get("https://dummyjson.com/products");
        return response.data.products;
    }
);

export default fetchProducts;
