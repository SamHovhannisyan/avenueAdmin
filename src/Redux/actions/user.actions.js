import {USERS, USERSCREATE, USERDELETE} from "../reducers/usersReducers";
import axios from "axios";

export const userGet = () => {
    return function (dispatch) {
         axios.get("http://localhost:5002/api/v1/auth/all", {
            headers: {
                Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`
            }
        })
            .then(({data}) => {
                dispatch({type: USERS, payload: {data: data}})
            });
    };
}

export const userCreate = userData => {
    return (dispatch) => {
         axios.post('http://localhost:5002/api/v1/auth/create', userData, {
            headers: {
                Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`
            }
        })
            .then(res => {
                dispatch({type: USERSCREATE, payload: res.data})
            })
            .catch(e => console.log(e))

    }
}

export const userDelete = id => {
    return dispatch => {
         axios.delete('http://localhost:5002/api/v1/auth/', {
                headers: {
                    Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`
                },
                data: {id}
            },
        ).then(res => {
            if (res.data.isDeleted) dispatch({type: USERDELETE, payload: id})
        }).catch(e => console.log(e))
    }
}