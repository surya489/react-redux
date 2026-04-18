import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/action";
import Button from "./Button";

const Weather = () => {
    const [city, setCity] = useState('');
    const weather = useSelector(state => state.weather);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    const handleFetchWeather = () => {
        if (city.trim()) {
            dispatch(fetchWeather(city));
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter city name (New York, London, Tokyo)"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Button
                        customClass=""
                        onClick={handleFetchWeather}
                        children="Get Weather"
                        disabled={loading}
                    />
                </div>

                {loading && <div className="alert alert-info">Loading weather data...</div>}

                {error && <div className="alert alert-danger">Error: {error}</div>}

                {weather && weather.city && (
                    <div className="alert alert-success">
                        <h6>Weather in {weather.city}</h6>
                        <p className="mb-1"><strong>Temperature:</strong> {weather.temperature}°C</p>
                        <p className="mb-0"><strong>Condition:</strong> {weather.condition}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;