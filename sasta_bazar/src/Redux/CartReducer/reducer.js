import {ADD_TO_CART, DELETE_TO_CART, ORDERED_PLACED} from "./actionType";

const initialstate = {
    cart: JSON.parse(localStorage.getItem('cart')) || []
};

export const reducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    payload
                ]
            };
        case DELETE_TO_CART:
            return {
                ...state,
                cart: [...payload]
            };
        case ORDERED_PLACED:
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
};
