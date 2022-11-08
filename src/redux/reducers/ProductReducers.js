import { ActionTypes } from "../actionConstans/productConstant"

const initialState = {
    product: [],
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, product: payload };

        default:
            return state;
    }

}