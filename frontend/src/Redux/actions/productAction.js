import axios from 'axios';

// types
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILURE,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILURE,PRODUCT_DETAILS_REQUEST} from '../types/productTypes'

export const listProducts=()=>async(dispatch)=>{
     dispatch({type:PRODUCT_LIST_REQUEST})
    try {
        const {data}= await axios.get("/api/products");
        return dispatch({type:PRODUCT_LIST_SUCCESS, payload:data});
    }
     catch (error) {
       return dispatch({type:PRODUCT_LIST_FAILURE, payload:error.message})
    }
}

export const productDetails =(_id)=>async(dispatch)=>{
    dispatch({type:PRODUCT_DETAILS_REQUEST,payload:_id})
    try {
        const {data}= await axios.get(`/api/products/${_id}`);
        return dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        return dispatch({type:PRODUCT_DETAILS_FAILURE,
            payload:error.response && error.response.data.message?
            error.response.data.message:
            error.message})
    }
}