import { combineReducers } from "redux";
import {productReducers} from "./reducers/shopReducers";
import {usersReducers} from "./reducers/usersReducers";
import {ordersReducers} from "./reducers/ordersReducers";

export const rootReducer = combineReducers({
    productReducers,
    usersReducers,
    ordersReducers
});
