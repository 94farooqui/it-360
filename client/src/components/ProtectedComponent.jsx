import { AuthContext } from '@/context/AuthContext'
import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedComponent = () => {
    const {user,loading} = useContext(AuthContext)
    useEffect(()=>{
        console.log("User",user,"Loading",loading)
    },[loading,user])
  return loading ? <h1>Loading</h1> : user ? <Outlet/> : <Navigate to='/login' />
}

export default ProtectedComponent
