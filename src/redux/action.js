// Action creators are functions that return action objects.

import { type } from "@testing-library/user-event/dist/type";
import { INCREMENT, DECREMENT, ADD_TODO, TOGGLE_TODO, DELETE_TODO, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./actionTypes";

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