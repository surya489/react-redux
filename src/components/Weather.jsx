import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/action";

const Weather = () => {

    const weather = useSelector(state => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Weather</h5>
                <p>Weather component coming soon...</p>
            </div>
        </div>
    )

};

export default Weather;