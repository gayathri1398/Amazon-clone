import { createStore,applyMiddleware, combineReducers ,compose} from 'redux';
import thunk from 'redux-thunk';

// reducers
import { productListReducer,productDetailsReducer } from './reducers/productReducer';
import data from '../data'

const initialState={};

const middleware =[thunk];



const rootReducer=combineReducers({
   productList:productListReducer,
   specificProduct:productDetailsReducer
})

const composeEnhancer =window.REDUX_DEVTOOLS_EXTENSION_ || compose;

const store = createStore(rootReducer,initialState,composeEnhancer(applyMiddleware(...middleware)));

export default store;