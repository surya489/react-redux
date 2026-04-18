// Action creators are functions that return action objects.

import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});