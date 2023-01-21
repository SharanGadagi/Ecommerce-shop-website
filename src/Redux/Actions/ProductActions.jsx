import { ProductAction_types } from "../Constants/ProductAction-types"
export const setProducts=(products)=>{
    return{
        type:ProductAction_types.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProducts=(products)=>{
    return{
        type:ProductAction_types.SELECTED_PRODUCTS,
payload:products
    }
}

export const removeSelectedProduct=(product)=>{
    return{
        type:ProductAction_types.REMOVE_SELECTED_PRODUCTS,
        payload:product
   
    }
}

export const addToCart=(product)=>{
    return{
        type:ProductAction_types.ADD_TO_CART,
        payload:product
   
    }
}

export const removeToCart=(product)=>{
    return{
        type:ProductAction_types.REMOVE_TO_CART,
        payload:product
   
    }
}

