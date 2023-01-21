import React,{useEffect, useState} from 'react'
import './ProductDetail.css'
import axios from 'axios'

import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts,removeSelectedProduct, addToCart ,removeToCart} from '../../Redux/Actions/ProductActions';
import {IoPricetag} from 'react-icons/io5'



const ProductDetail = () => {
  const [cartBtn, setCartBtn]=useState("Add To Cart")
  const navigate=useNavigate()
 const {productId}=useParams();
 console.log(productId)
const product=useSelector((state)=>state.productDetail);
const {id,title,image,price,description,category,rating}=product
console.log(product);

const dispatch=useDispatch()


const handleCart=(item)=>{
  if(cartBtn=="Add To Cart"){
    dispatch(addToCart(item))
    setCartBtn("Remove From Cart")
  
  }else{
    dispatch(removeToCart(item))
    setCartBtn("Add To Cart")
   
  }
}


 const fetchProductDetails=async(id)=>{
const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
.catch((error)=>console.log("Error", error))

dispatch(selectedProducts(response.data))
// console.log(response.data)
 }



 useEffect(()=>{
if(productId && productId !== "") fetchProductDetails(productId)

return ()=>{
  dispatch(removeSelectedProduct())
}

 },[productId])
  
  return (
<>
<div className="productDetail">
  {Object.keys(product).length===0?
( <div>Loading......</div> )  :
(
  <div className="pdContainer">

      
      
        <div className="productImage">
          <img src={image} alt='productImage'/>
        </div>
        <div className="ProductInfo">
        <h3 className="pCategory">{category}</h3>
          <h1 className='pTitle'>{title}</h1>
          <h4 className="pRating">Rating {rating.rate}★ </h4>
          <div className="pdPrice">
            <IoPricetag color='green' size='2rem' ></IoPricetag>
            <h2 className="pPrice">${price}</h2>
            </div>
         
      
          <p className='pDesc'>{description}</p>
          <div className="pdButton" tabIndex="0">
          <div className="addToCart cart" onClick={()=>handleCart(product)} >{cartBtn}</div>
           <div className="goCart cart" onClick={()=>navigate('/cart')} >Go To Cart</div>
          </div>
        </div>
     
 
  </div>
)

}
  
</div>
</>
  )
}

export default ProductDetail
