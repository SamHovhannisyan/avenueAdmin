import {ORDERS} from "../reducers/ordersReducers";
import axios from "axios";

export const ordersGet = () => {
    return function (dispatch) {
        axios.get("http://localhost:5002/api/v1/orders/", {
            headers: {
                Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`
            }
        })
            .then(res => {
                console.log(res.data,';;;;;;;')
                dispatch({type: ORDERS, payload: res.data})
            });
    };
}