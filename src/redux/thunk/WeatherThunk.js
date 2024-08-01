import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "82546e5fc26d8e0be967d986d2801b67";

const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        return response.data;
    }
);

export default fetchWeather;
