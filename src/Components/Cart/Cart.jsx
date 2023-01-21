import React, { useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../../Redux/Actions/ProductActions';
import {ImCross} from 'react-icons/im'
import { useNavigate } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
    const [totalCartItem,setTotalCartItem]=useState(1)
    const product=useSelector((state)=>state.cart);
    const navigate=useNavigate()
    // const {id,title,image,price,description,category,rating}=product
    const dispatch=useDispatch()
    // console.log(product);

    const handleClose=(item)=>{
        dispatch(removeToCart(item))
    }
const handlePlusCartItem=(product)=>{
setTotalCartItem((product)=>{
   return product+1
})

}
const handleMinusCartItem=(item)=>{
setTotalCartItem((product)=>{
    return product-1
 })
 
 }
    

    const cartItems=(cartItem)=>{
        return(
            
            <div className="cartItem" key={cartItem.id}>
                <div className="cartItemContainer" key={cartItem.id}>
                    <div className="CartImage">
                        <img src={cartItem.image} alt="CartImage" />
                    </div>
                    <div className="cartMainTitle">
                        <h1 className="cartTitle">{cartItem.title} </h1>
                        </div>
                        <h2 className="singleCartPrice">$ {cartItem.price} </h2>
{/* <div className="cartQuantity">

                        <button className="plus cartQtyBtn" onClick={()=>handlePlusCartItem(cartItem.id)} >+</button> 
                        <h3 className="totalQuantity">{totalCartItem} </h3>
                            <button className="minus cartQtyBtn" onClick={()=>handleMinusCartItem(cartItem.id)} >-</button>
                            </div> */}
                            {/* <div className="price">
                            <h2 className="cartTotalPrice">$ {totalCartItem * cartItem.price} </h2>
                          
                        </div> */}
                        <div className="cartCancel" onClick={()=>handleClose(cartItem)}><AiFillDelete size='2rem'color='red' /> </div>

                       
                    
                </div>


            </div>
            
        )
    }

    const emptyCart=()=>{
        return(
            <div className="emptyCart">
                <h1 className="emptycart" >Your Cart is Empty </h1>
            </div>
        )
    }

    const checkOut=()=>{
        return(
            <div className="checkOutButton">
                <button className="checkOutBtn" onClick={()=>navigate('/checkout')} >Check Out</button>

            </div>
        )
    }

  return (
 <>
 {product.length===0 && emptyCart()}
{product.length !==0 && product.map(cartItems)}
{product.length !==0 && checkOut()}
 </>
  )
}

export default Cart
