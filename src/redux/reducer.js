//Reducers specify how the application's state changes in response to actions. The reducer function receives the current state and action, and returns the updated state.

import { INCREMENT, DECREMENT, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";

const initialState = {
    count: 0,
    todos: []
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
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload.text,
                        completed: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default counterReducer;