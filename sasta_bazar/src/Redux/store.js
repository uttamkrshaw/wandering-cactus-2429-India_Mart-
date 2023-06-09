import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as shopReducer } from "./ShoppingReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import { reducer as CartReducer } from "./CartReducer/reducer";
import {reducer as AdminReducer } from "./AdminRedux/reducer"
let mainReducer = combineReducers({ ProductReducer, shopReducer, CartReducer, AuthReducer , AdminReducer });
export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));
