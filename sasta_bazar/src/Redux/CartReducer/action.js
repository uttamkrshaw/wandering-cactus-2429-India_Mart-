import {ADD_TO_CART, DELETE_TO_CART, ORDERED_PLACED} from "./actionType";
import axios from "axios"

export const postCartData = (payload) => {
    return {type: ADD_TO_CART, payload};
};

export const deleteCartData = (payload) => {
    return {type: DELETE_TO_CART, payload};
};

export const orderPlaced = () => {
    localStorage.removeItem('cart')
    return {type: ORDERED_PLACED}
}


export const orderPlacedSuccess = (payload) => (dispatch) => {
    let data = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < data.length; i++) {
        payload.order.push(data[i])
    }
    axios({
        method: 'patch',
        url: `https://india-mart.onrender.com/userdata/${
            payload.id
        }`,
        data: {
            order: payload.order
        }
    }).then((res) => dispatch(orderPlaced()))
    
}
