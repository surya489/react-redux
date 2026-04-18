// Action creators are functions that return action objects.

import { 
    INCREMENT, 
    DECREMENT, 
    ADD_TODO, 
    TOGGLE_TODO, 
    DELETE_TODO, 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    UPDATE_QUANTITY, 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE,
    LOGIN,
    LOGOUT,
    TOGGLE_THEME,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
} from "./actionTypes";

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id }
});

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: { item }
});

export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    payload: { item }
});

export const updateQuantity = (item, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { item, quantity }
});

// Async actions for fetching products

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
});

// Thunk action to simulate API call
export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        // Simulate API call with setTimeout
        setTimeout(() => {
            const products = [
                { id: 1, name: 'Apple', price: 1.00 },
                { id: 2, name: 'Banana', price: 0.50 },
                { id: 3, name: 'Orange', price: 0.75 }
            ];
            dispatch(fetchProductsSuccess(products));
        }, 1000); // Simulate 1 second delay
    };
};

export const login = (user) => ({
    type: LOGIN,
    payload: {
        name: user.name,
        email: user.email,
        token: user.token
    }
});

export const logout = () => ({
    type: LOGOUT
});

export const toggleTheme = (color) => ({
    type: TOGGLE_THEME,
    payload: { color }
});

export const fetchWeatherRequest = () => ({
    type: FETCH_WEATHER_REQUEST
});

export const fetchWeatherSuccess = (weather) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error
});

// Fetch weather thunk action

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest());
        // Simulate API call with setTimeout
        setTimeout(() => {
            const weather = () => {
                if (city.toLowerCase() === "new york") {
                    return { city: "New York", temperature: 25, condition: "Sunny" };
                } else if (city.toLowerCase() === "london") {
                    return { city: "London", temperature: 15, condition: "Cloudy" };
                } else if (city.toLowerCase() === "tokyo") {
                    return { city: "Tokyo", temperature: 20, condition: "Rainy" };
                } else {
                    return null;
                }
            }
            const result = weather();
            if (result) {
                dispatch(fetchWeatherSuccess(result));
            } else {
                dispatch(fetchWeatherFailure("City not found"));
            }
        }, 1000);
    }
}