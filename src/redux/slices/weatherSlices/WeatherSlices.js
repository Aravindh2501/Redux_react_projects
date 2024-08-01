import { createSlice } from "@reduxjs/toolkit";
import fetchWeather from "../../thunk/WeatherThunk";

const initialState = {
    weather: {},
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;
