import { ActionTypes } from "../actionConstans/productConstant"



//=============== FETCH DATA IN SET IN STORE ===============//
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}


//============== CHECT LENGTH OG SEARCH INPUT ============== //
export const boolean = (length) => {
    return {
        type: ActionTypes.LENGTH,
        payload: length
    }
}

//============== DISPLAY SEARCHED PRODUCT ============== //

export const searchProducts = (produ, match) => {
    let matchdata
    try {
        matchdata = produ.filter((val) => {
            return val.name.toLowerCase().startsWith(match.toLowerCase())
        })
    } catch (err) {
        console.log(err);
    }
    // console.log('action:-', matchdata);
    return {
        type: ActionTypes.SEARCH_PRODUCTS,
        payload: matchdata
    }

}

//============== ADD TO CART ============== //

let addcartitem = [];
export const selectedProducts = (productdata, productID) => {

    // console.log(productdata);
    // console.log('productID', productID);

    const addToCart = productdata.filter((product) => {
        return product.id === productID
    })

    console.log('addToCart', addToCart);
    addcartitem.push(addToCart);
    console.log('addcartitem', addcartitem);
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: addcartitem.flat(1)
    }
}

//============== PRODUCT INFO DATA ============== //

export const ProductInfo = (productdata, productID) => {

    console.log(productdata);

    const infoproduct = productdata.filter((product) => {
        return product.id === productID
    })

    console.log('pro data in action', infoproduct);

    return {
        type: ActionTypes.PRODUCTS_INFO,
        payload: infoproduct
    }

}

//============== REMOVE FROM CART ============== //

export const removeCartItems = (CartProducts, productID) => {
    console.log("cart Product && Product id", CartProducts, productID);

    const newCartItem = CartProducts.filter((ele) => {
        return ele.id !== productID
    })

    addcartitem = newCartItem
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload: newCartItem
    }
}

// ======================== increment product ========================//

export const incrementProduct = (CartProducts, id) => {
    console.log('count', CartProducts, id);
    const productcount = CartProducts.map((ele) => {

        if (ele.id === id) {
            const count = ++ele.box_count

            if (count > 5) {
                return { ...ele, box_count: 5 }
            }

            return { ...ele, box_count: count }
        } else {
            return { ...ele }
        }
    })

    console.log('productcount', productcount);
    return {
        type: ActionTypes.INCREMENT,
        payload: productcount
    }
}

// ======================== decrement product ========================//

export const decrementproduct = (CartProducts, id) => {
    console.log('count', CartProducts, id);
    const productcount = CartProducts.map((ele) => {
        if (ele.id === id) {
            const count = --ele.box_count
            if (count < 1) {
                return { ...ele, box_count: 1 }
            }
            return { ...ele, box_count: count }
        } else {
            return { ...ele }
        }
    })
    console.log('productcount', productcount);
    return {
        type: ActionTypes.DECREMENT,
        payload: productcount
    }
}

