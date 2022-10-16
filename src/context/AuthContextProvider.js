import React from 'react'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const AuthContext = React.createContext() ;
export default function AuthContextProvider({children}) {
  const [loading,setLoading] = useState(true)
  const [user,setUser] = useState(false)
  const navigate = useNavigate()
  useEffect (()=>{
     auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
      if (user) navigate.push('/home')
     })
  }, [user, navigate])
  return (
    <AuthContext.Provider value={user}>

        {!loading && children}
    </AuthContext.Provider>
  )
}
