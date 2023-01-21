import React, { useState } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import {MdPersonAddAlt1} from 'react-icons/md'
import {BsCartPlusFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import {GoThreeBars} from 'react-icons/go'
import {GiCancel} from 'react-icons/gi'
const Header = () => {
  const [click,setClick]=useState(false)
  const product=useSelector((state)=>state.cart)
  console.log(product);
  const navigate=useNavigate()
  return (
  <>
  <div className="ShopNavbar">
    <div className="navbarContain">
      <div className="navMainTitle">
      <Link to='/' >

      <h1 className="navTitle">
        Fake Shop
      </h1>
      </Link>
      </div>
      <div className="navItems1">
      <ul className={click?"mobile-nav":" navUL"} onClick={()=>setClick(false)}>
  <Link to='/' >
  <li className="navItem1">Home</li>
  </Link>
  <Link to='/product' >
  <li className="navItem1">Products</li>
  </Link>  <Link>
  <li className="navItem1">About</li>
  </Link>  <Link>
  <li className="navItem1">Contact</li>
  </Link>
</ul>
      </div>
      <div className="navItems2">
<div className="navBtn navLogin"   onClick={()=>navigate('/login')}>
  <FiLogIn/>
Login
</div>
<div className="navBtn register"   onClick={()=>navigate('/register')}>
  <MdPersonAddAlt1/>
  Register
</div>
<div className="navBtn cartBtn" onClick={()=>navigate('/cart')}>
  <BsCartPlusFill/>
  Cart({product.length})
</div>
      </div>

      <div className="mobileBar" onClick={()=>setClick(!click)}>
      
      {click ? <GiCancel   size='1.8rem'/>:<GoThreeBars size='1.8rem' /> }
      
       </div>
    </div>


  </div>
  </>
  )
}

export default Header
