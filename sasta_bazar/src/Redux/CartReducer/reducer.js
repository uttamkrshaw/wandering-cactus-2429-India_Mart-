import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    DELETE_TO_CART,
    INCREASE_QUANTITY,
    ORDERED_PLACED
} from "./actionType";

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
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((x) => x.id === payload ? {
                    ...x,
                    quantity: x.quantity + 1
                } : x)
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((x) => x.id === payload ? {
                    ...x,
                    quantity: x.quantity - 1
                } : x)
            }

        default:
            return state;
    }
};
