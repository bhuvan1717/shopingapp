

import { ActionTypes } from "../actionConstans/productConstant"

const initialState = {
    searchrdproduct: [],
    addtoCart: [],
    productInfo: [],
    Boolean: ''
}

export const searchreducer = (state = initialState, { type, payload }) => {

    switch (type) {


        case ActionTypes.SEARCH_PRODUCTS:
            return { ...state, searchrdproduct: payload }


        case ActionTypes.LENGTH:
            return { ...state, Boolean: payload }


        case ActionTypes.SELECTED_PRODUCTS:
            // console.log('payload', payload);
            const dublicate = [...new Set(payload)]
            // console.log('payload Set', dublicate);
            // console.log(state, 'ststes')
            return { ...state, addtoCart: [...dublicate] };


        case ActionTypes.PRODUCTS_INFO:
            console.log('pro data in reducer', payload);
            return { ...state, productInfo: payload };


        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            // const {  productID } = payload
            // console.log(payload);
            return { ...state, addtoCart: payload }


        case ActionTypes.INCREMENT:
            return { ...state, addtoCart: payload }
            

        case ActionTypes.DECREMENT:
            return { ...state, addtoCart: payload }

        default: return state;

    }

}