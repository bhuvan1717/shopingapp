import { combineReducers } from "redux";
import { reducer } from "./ProductReducers"
import { searchreducer } from "./useProductData";


export const reducers = combineReducers({

    Allproducts: reducer,
    useData: searchreducer,

    
})