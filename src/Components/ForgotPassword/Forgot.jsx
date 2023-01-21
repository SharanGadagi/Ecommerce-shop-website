import React from 'react'
import { passwordValidation } from '../Validation/Validation'
import './Forgot.css'
import { Link, Navigate } from 'react-router-dom'
// import Banner from '../Banner/Banner'
import { useFormik } from 'formik'
import google from '../Images/google.png'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  
    email: "",
}

const Forgot = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: passwordValidation,
    onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
    }
})

const codeNavigate=useNavigate();
  return (
    <>
    <div className="password" id="password">

{/* <div className="home-banner">
<Banner />
</div> */}

<div className="signup">

<div className="signup-title">
  <h2 className="p-title">Forgot your Password</h2>
  <span className="p-desc">Please confirm your email address below and we will send you a verification code</span>
</div>

<form className='signup-mainForm' action="" onSubmit={handleSubmit}>
  <div className="signup-form">
     
      <div className="signup-input">
          <input type="email" placeholder='Email'
              autoComplete='off'
              name="email"
              id='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
          /> <br />
          {errors.email && touched.email ? (<p className='signup-error'>{errors.email}</p>) : null}
      </div>
     

      <div className="s-btns">
      <button className="signup-btn" onClick={()=>codeNavigate('/verification')}  type='submit'>Continue</button>
      
      </div>
  </div>


</form>


<button className="google-signup">
                      <div className="google-img">
                      <img src={google} alt="google" />
                      </div>
                      Login with Google
                          </button>

<div className="already-account">
  Already have an account? 
  <Link  className='already-account-link' to='/login'>Login</Link>
</div>
</div>



</div>
    </>
  )
}

export default Forgot