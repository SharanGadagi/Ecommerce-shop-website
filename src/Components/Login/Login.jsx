import React from 'react'
import './Login.css'
import { useFormik } from 'formik'
import {loginValidation} from '../Validation/Validation.jsx'
// import Banner from '../Banner/Banner'
import { Link, useNavigate,  } from 'react-router-dom'
import google from '../Images/google.png'


const initialValues = {
 
    email: "",
    password: ""
  }

const Login = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: loginValidation,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    })
    const loginNavigate=useNavigate();
  return (
<>
<div className="login" id="login">

   {/* <div className="home-banner">
<Banner />
</div> */}

   <div className="signup">

<div className="signup-title">
    <h2 className="s-title">Login</h2>
    <span className="s-desc">Welcome back please enter your details.</span>
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
        <div className="signup-input">
            <input type="password" placeholder='Password'
                autoComplete='off'
                name="password"
                id='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            /> <br />
            {errors.password && touched.password ? (<p className='signup-error'>{errors.password}</p>) : null}

        </div>
        <div className="forgot">
        <Link to='/forgotPassword'  >Forgot Password?</Link>
        </div>
       

        <div className="s-btns">
        <button className="login-btn" onClick={()=>loginNavigate('/')} type='submit'>Login</button>
        
        </div>
    </div>

</form>

                            <button className="google-signup">
                        <div className="google-img">
                        <img src={google} alt="google" />
                        </div>
                                Sign up with Google
                            </button>

<div className="already-account">
    Don't have an account? 
    <Link className='already-account-link' to='/register'>Sign up</Link>
</div>
</div>



   </div>
</>
  )
}

export default Login