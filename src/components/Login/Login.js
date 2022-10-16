import React , {useEffect, useState} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validate} from './validate.js'
import { notify } from './toast';
import './signup.css'
import { Link } from 'react-router-dom';
//auth
import firebase from 'firebase/app';
import { auth } from "../../firebase";
import { TextField } from '@mui/material';
export default function Signup() {

  const [data, setData] = useState({
    name : "" ,
    email : "" ,
    password : "" ,
    confirmPassword : "" ,
    isAccepted : false
  })

  const focusHandler = event => {
     setTouched({ ...touched, [event.target.name] : true})
  }

  const [errors, setErrors] = useState({}) ;
  const [touched, setTouched] = useState({}) ;

  useEffect(() => {
    setErrors(validate(data,'login'))
  }, [data, touched] )
  
  const changeHandler = event => {
    
      setData({...data, [event.target.name] : event.target.value})
    

  }

  const submitHandler = event => {
    event.preventDefault()
    if (!Object.keys(errors).length) {
      notify('success',"Your login successfully")

    } else {
      notify('error','Invalid data!')
      setTouched ( {
       email : true ,
       isAccepted : true ,
       
      })
    }
  }


  return (
    <div className='containerL'>
      <form onSubmit={submitHandler} className='formContainer' >
         <h1 className='header'>LOGIN</h1>
         <div className='formField'>
           <TextField
            label="email"
            variant="outlined"
            id="outlined-error-helper-text"
            error = { (errors.email && touched.email)  && "error" }
            helperText = { errors.email && touched.email && <span>{errors.email}</span> }
           type="text" 
           name='email' 
           value={data.email} 
           onChange={changeHandler} 
           onFocus={focusHandler} />
         </div>
         <div className='formField'>
           <TextField
            label="Password"
            variant="outlined"
            id="outlined-error-helper-text"
            error = { (errors.password && touched.password)  && "error" }
            helperText = { errors.password && touched.password && <span>{errors.password}</span> }
           type="password" 
           name='password' 
           value={data.password} 
           onChange={changeHandler} 
           onFocus={focusHandler} />
         </div>
         <div className='formButtons'>
           <Link to="/signup">SignUp</Link>
           <button type='submit'>Login</button>

           
         </div>
         <div className="or">
          <p>or</p>
         </div>
         

                <div 
                    className='button'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                     Sign in with Google
                </div>
            </form>
      <ToastContainer />
    </div>
    
     
  )
}