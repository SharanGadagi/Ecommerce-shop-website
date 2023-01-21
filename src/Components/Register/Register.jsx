import React from 'react'
import './Register.css'

import { useFormik } from 'formik'

import { signupValidation } from '../Validation/Validation'
import { Link } from 'react-router-dom'
import google from '../Images/google.png'

const initialValues = {
  name: "",
  email: "",
  password: "",

}

const Register = () => {

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signupValidation,
    onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
    }
})
  return (
    <>
      <div className="login" id="login">
                {/* <div className="main-home"></div> */}
                <div className="signup">

                    <div className="signup-title">
                        <h2 className="s-title">Create an account</h2>
                       
                    </div>

                    <form className='signup-mainForm' action="" onSubmit={handleSubmit}>
                        <div className="signup-form">
                            <div className="signup-input">
                                <input type="text" placeholder='Name'
                                    autoComplete='off'
                                    name="name"
                                    id='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                /><br />
                                {errors.name && touched.name ? (<p className='signup-error'>{errors.name}</p>) : null}
                            </div>
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

                            <div className="s-btns">
                            <button className="signup-btn" type='submit'>Create account</button>
                           
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
                        Already have an account? 
                        <Link  className='already-account-link' to='/login'>Login</Link>
                    </div>
                </div>


                 
            </div>
    </>
  )
}

export default Register