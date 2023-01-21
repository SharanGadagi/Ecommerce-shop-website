import { combineReducers } from "redux";
import { handleCart, productReducer, selectedProductReducer } from "./ProductReducer";

 const rootReducer=combineReducers({
    productReducer:productReducer,
    productDetail:selectedProductReducer,
    cart:handleCart
})

export default rootReducer