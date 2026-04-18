//Reducers specify how the application's state changes in response to actions. The reducer function receives the current state and action, and returns the updated state.

import { INCREMENT, DECREMENT } from "./actionTypes";

const initialState = {
    count: 0   
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default counterReducer;