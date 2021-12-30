import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILURE,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_FAILURE,PRODUCT_DETAILS_SUCCESS} from '../types/productTypes'

const INITIAL_STATE={
    products:[],
    specificproduct:{},
    loading:true
}

export const productListReducer =(state= INITIAL_STATE,action)=>{
 switch(action.type){
     case PRODUCT_LIST_REQUEST:
         return{
             loading:true
         }
     case PRODUCT_LIST_SUCCESS:
         return{
             loading:false,
             products:action.payload
         }
    case PRODUCT_LIST_FAILURE:
        return {
            loading:false,
            error:action.payload
        }
    default:
        return{
            ...state
        }
 }
}

export const productDetailsReducer =(state=INITIAL_STATE,action)=>{
   switch (action.type){
       case PRODUCT_DETAILS_REQUEST:
           return{
               loading:true
           }
       case PRODUCT_DETAILS_SUCCESS:
           return{
               loading:false,
               specificproduct:action.payload
           }
        case PRODUCT_LIST_FAILURE:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return{ 
                ...state
            }
   }
}
