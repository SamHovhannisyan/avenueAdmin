import {PRODUCT, PRODUCTCREATE, PRODUCTDELETE, PRODUCTUPDATE} from "../reducers/shopReducers";
import axios from "axios";

export const productGet = (page) => {
    return function (dispatch) {
        return axios.get("http://localhost:5002/api/v1/product/admin/all", {
            headers: {
                Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`
            },
            params: {page}
        })
            .then(res => {
                dispatch({type: PRODUCT, payload: res.data});
            })
            .catch(e => console.log(e))
    };
};


export const createProduct = (productData) => {
    return (dispatch) => {
        axios.post(`http://localhost:5002/api/v1/product/`, productData, {
            headers: {
                Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`,
                // 'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data,'ccccccccccccccccccccccccc')
                dispatch({type: PRODUCTCREATE, payload: res.data})
            })
            .catch(e => console.log(e))
    }
}

export const updateProduct = (filterProductData) => {
    console.log(filterProductData,'filterProductData actions')
    return (dispatch) => {
        axios.put('http://localhost:5002/api/v1/product/', filterProductData, {
            headers: {
                Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`,
            }
        })
            .then(res => {
                console.log(res.data,'lllll++++');
                dispatch({type: PRODUCTUPDATE, payload: filterProductData})
            })
    }
}

export const productDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:5002/api/v1/product/", {
                headers: {
                    Authorization: `Beraer ${localStorage.getItem('kkjafeljai&*&#$nafnakj')}`
                },
                data: {id}
            },
        ).then(res => {
            if (res.data.isDeleted) dispatch({type: PRODUCTDELETE, payload: id})
        }).catch(e => console.log(e))
    }
}