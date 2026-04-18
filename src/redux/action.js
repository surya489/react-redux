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
    LOGOUT
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