import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '../../redux/thunk/WeatherThunk';

const Weather = () => {
    const [input, setInput] = useState("chennai");
    const dispatch = useDispatch();
    const { weather, loading, error } = useSelector((state) => state.weather);

    const handleSearch = () => {
        if (input.trim()) {
            dispatch(fetchWeather(input));
            setInput('');
        }
    };

    return (
        <div className='weather'>
            <div className="card">
                <div className="weather_top">
                    <input
                        type="text"
                        value={input}
                        placeholder='Search the city...'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {weather && weather.main && (
                    <div>
                        <h2>{weather.name}</h2>
                        <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                        <p>Weather: {weather.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
