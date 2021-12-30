import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILURE} from '../types/productTypes'

const INITIAL_STATE={
    products:[],
    loading:true
}
export const productListReducer =(state=INITIAL_STATE,action)=>{
 switch(action.type){
     case PRODUCT_LIST_REQUEST:
         return{
             loading:true
         }
     case PRODUCT_LIST_SUCCESS:
         return{
             loading:false,
             payload:action.payload
         }
    case PRODUCT_LIST_FAILURE:
        return {
            loading:false,
            payload:action.payload
        }
    default:
        return{
            ...state
        }
 }
}
