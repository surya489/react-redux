//Reducers specify how the application's state changes in response to actions. The reducer function receives the current state and action, and returns the updated state.

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

const initialState = {
    count: 0,
    todos: [],
    cart: [],
    products: [],
    loading: false,
    error: null,
    user: [],
    color: "light",
    weather: []
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
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload.item]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.item.id)
            };
        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.item.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case LOGIN:
            return {
                ...state,
                user: [
                    ...state.user,
                    {
                        id: Date.now(),
                        name: action.payload.name,
                        email: action.payload.email,
                        token: action.payload.token,
                        isLoggedIn: true
                    }
                ]
            };
        case LOGOUT:
            return {
                ...state,
                user: []
            };
        case TOGGLE_THEME:
            return {
                ...state,
                color: action.payload.color
            };
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                weather: action.payload
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default counterReducer;