import * as Yup from 'yup'

export const signupValidation=Yup.object({
    name: Yup.string().min(2,"Name must be at least 2 characters").required("Please Enter Your Name"),
    email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
    password:Yup.string().min(8,"Password must be at least 8 characters").required("Please Enter  Password")
})

export const loginValidation=Yup.object({
   
    email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
    password:Yup.string().min(8,"Password must be at least 8 characters").required("Please Enter  Password")
})

export const passwordValidation=Yup.object({
   
    email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
    
})