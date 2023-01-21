import React from 'react'
import { Link } from 'react-router-dom'

import './VerifyCode.css'
import { useNavigate } from 'react-router-dom'



const VerifyCode = () => {
    const loginNavigate=useNavigate();
  return (
 <>
 <div className="verification" id="verification">



    <div className="verification2">
    <div className="v-title">
        <h2 className="v-title1">Verify Code</h2>
        <span className="v-desc">Code is sent to nicknage@gmail.com</span>
    </div>
    <div className="v-code">
        <div className="code">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
        <button className='v-btn' onClick={()=>loginNavigate('/login')}>Verify</button>
    </div>

<div className="a-account">
    Already have an account ?
    <Link className='a-account-link' to='/login'>Login</Link>
</div>
</div>


</div>
 </>
  )
}

export default VerifyCode
