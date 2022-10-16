import React , {useEffect, useState} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validate} from './validate.js'
import { notify } from './toast';
import { Link } from 'react-router-dom';
//style
import { FormControl, FormControlLabel, TextField } from "@mui/material";
import './signup.css'
//auth
import firebase from 'firebase/app';
import { auth } from "../../firebase";
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
    setErrors(validate(data, 'signup'))
  }, [data , touched] )
  
  const changeHandler = event => {
    if (event.target.name === "isAccepted") 
    {
      setData({...data , [event.target.name] : event.target.checked})
    } else {
      setData({...data, [event.target.name] : event.target.value})
    }

  }

  const submitHandler = event => {
    event.preventDefault()
    if (!Object.keys(errors).length) {
      notify('success',"Your verify successfully")

    } else {
      notify('error','Enter the complete information')
      setTouched ( {
       name : true , 
       email : true ,
       isAccepted : true ,
       confirmPassword : true ,
       password : true
      })
    }
  }


  return (
    <div className='containerL'>
      <form onSubmit={submitHandler} className='formContainer' >
         <h1 className='header'>Signup</h1>
         <div className='formField'>
           <TextField
            label="name"
            variant="outlined"
            id="outlined-error-helper-text"
            error = { (errors.name && touched.name)  && "error" }
            helperText = { errors.name && touched.name && <span>{errors.name}</span> }
           type="text" 
           name='name' 
           value={data.name} 
           onChange={changeHandler} 
           onFocus={focusHandler}  
            />
           
         </div>
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
            label="password"
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
         <div className='formField'>
           <TextField
            label="confirmPassword "
            id="outlined-error-helper-text"
            error = { (errors.confirmPassword && touched.confirmPassword) && "error" }
            helperText = { errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span> }
           type="password" 
           name='confirmPassword' 
           value={data.confirmPassword} 
           onChange={changeHandler} 
           onFocus={focusHandler} />
           
         </div>
         
         <div className='formField'>
          <div className='checkBoxContainer'>
           <label>I accept term of privacy policy</label>
           <input
           
           type="checkbox" 
           className='CheckBox'
           name='isAccepted' 
           value={data.isAccepted} 
           onChange={changeHandler} 
           onFocus={focusHandler} />
           </div>
           { errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span> }
         </div>
         <div className='formButtons'>
           <button type='submit'>Sign Up</button>
           <Link to="/login">Login</Link>

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