import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./redux/slices/counterSlices/CounterSlice";
import todoReducer from "./redux/slices/todoSlices/TodoSlice";
import cartReducer from "./redux/slices/cartSlices/CartSlice";
import noteReducer from "./redux/slices/noteSlices/NoteSlices";
import weatherReducer from "./redux/slices/weatherSlices/WeatherSlices";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        todo: todoReducer,
        cart: cartReducer,
        note: noteReducer,
        weather: weatherReducer,
    },
});

export default store;
