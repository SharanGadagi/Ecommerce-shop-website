
import { ProductAction_types } from "../Constants/ProductAction-types";

const initialState={
    products:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
switch(type){
    case ProductAction_types.SET_PRODUCTS:
        return {...state,
        products:payload
        };
        default:
            return state
}
}


export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ProductAction_types.SELECTED_PRODUCTS:
            return {...state,...payload};

            case ProductAction_types.REMOVE_SELECTED_PRODUCTS:
                return {};
            default:
             return   state
    }
}

// export const handleCart=(state=initialState,{type,payload})=>{
// switch(type){
//     case ProductAction_types.ADD_TO_CART:
//         //check if product alredy exist
//         const exist=state.find((x)=>x.id===payload.id);
//         if(exist){
//             //increase the quantity
//             return state.map((x)=>
//                 x.id===payload.id? {...x,quantity:x.quantity+1}:x
//             )
//         }else{
//             return [
//                 ...state,
//                 {
//                     ...payload,
//                     quantity:1

//                 }
//             ]
//         }
//         break;
//         case ProductAction_types.REMOVE_TO_CART:
//              //check if product alredy exist
//         const exist1=state.find((x)=>x.id===payload.id);
//         if(exist1.quantity===1){
//             return state.filter((x)=>x.id!==exist1.id)
//         }else{
//             return state.map((x)=>
//             x.id===payload.id ? {...x,quantity:x.quantity-1}:x
//             )
//         }
//         break;
//         default:
//           return  state;
//           break;

// }
// }



// export const handleCart=(state=initialState.products,action)=>{
//     const product=action.payload;
//     switch(action.type){
//         case ProductAction_types.ADD_TO_CART:
//             //check if product already exist
//             const exist=state.find((x)=>x.id===product.id);
//             if(exist){
//                 //increase the quantity
//                 return state.map((x)=>
//                     x.id===product.id? {...x,quantity:x.quantity+1,...product}:x
//                 )
//             }else{
//                 const product=action.payload;
//                 return [
//                     ...state,
//                     {
//                         ...product,
//                         quantity:1
    
//                     }
//                 ]
//             }
//             break;
//             case ProductAction_types.REMOVE_TO_CART:
//                  //check if product alredy exist
//             const exist1=state.find((x)=>x.id===product.id);
//             if(exist1.quantity===1){
//                 return state.filter((x)=>x.id!==exist1.id)
//             }else{
//                 return state.map((x)=>
//                 x.id===product.id ? {...x,quantity:x.quantity-1}:x
//                 )
//             }
//             break;
//             default:
//               return  state;
//               break;
    
//     }
//     }

export const handleCart=(state=initialState.products,action)=>{
switch(action.type){
    case ProductAction_types.ADD_TO_CART:
        return [...state,
            action.payload];
        break;
        case ProductAction_types.REMOVE_TO_CART:
            return state=state.filter((x)=>{
            return    x.id!==action.payload.id
            })
            break;
            default :
            return state;
            break;
}
}