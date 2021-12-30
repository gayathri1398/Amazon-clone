import { createStore,applyMiddleware, combineReducers ,compose} from 'redux';
import thunk from 'redux-thunk';

import data from '../data'

const initialState={};

const middleware =[thunk];

// const rootReducer = combineReducers({product:productLists});

const rootReducer=(state,action)=>{
   return {products:data.products}
}

const composeEnhancer =window.REDUX_DEVTOOLS_EXTENSION_ || compose;

const store = createStore(rootReducer,initialState,composeEnhancer(applyMiddleware(...middleware)));

export default store;