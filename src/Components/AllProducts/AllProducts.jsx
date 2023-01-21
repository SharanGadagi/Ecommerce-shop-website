import React,{useEffect} from 'react'
import './AllProduct.css'
import {useSelector,useDispatch} from 'react-redux'
import SingleProduct from '../SingleProduct/SingleProduct';
import axios from 'axios';
import { setProducts } from '../../Redux/Actions/ProductActions';
const AllProducts = () => {
    const product=useSelector((state)=>state);
    const dispatch=useDispatch();
    console.log(product)
    const fetchApi=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products')
        // .then(data=>dispatch(setProducts(data)))
        .catch(error=>console.log("Error:" ,error))
  dispatch(setProducts(response.data))
    //    console.log(response)
    }
    

useEffect(() => {
  fetchApi();

}, [])

console.log("products:", product);


   
  return (
 <>
<div className="allProductMain">
<h2 className="allProductTitle">Latest Products</h2>
<div className="allProducts">
    <SingleProduct/>
 </div>
 </div>
 </>
  )
}

export default AllProducts
