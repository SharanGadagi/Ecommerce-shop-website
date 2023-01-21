import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './SingleProduct.css'
import { cart } from '../../Redux/Reducer/ProductReducer'

const SingleProduct = () => {
    const product=useSelector((state)=>state.productReducer.products)
    const dispatch=useDispatch()
    console.log(product)
    const renderList=product.map((item)=>{
       
       
        
  return (
    <>
    

        <div className="singleProduct-container" key={item.id} >
            <Link to={`/product/${item.id}`}>
    {/* <div className="singleItem"> */}
        <div className="itemCard">
    <div className="image">
      <img src={item.image} alt="itemImage" />
    </div>
    <div className="itemContent">
      
        <h2 className="ItemTitle">
    {item.title}
        </h2>
        <h3 className="itemPrice">${item.price} </h3>
        <p className="itemCategory">
    {item.category}
        </p>
    </div>
    {/* <button>BUY NOW</button> */}
        </div>
        
    {/* </div> */}
    </Link>


    </div>

    
    </>
    
      )
  })
return <>




{renderList}

 </>

}

export default SingleProduct
