import { fetchUser } from '@/services/api';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user,setUser] = useState()

  useEffect(()=>{
    
    fetchUserDetails(token)
  },[token])

  const fetchUserDetails = async (token) => {
    
    const userDetails = await fetchUser(token)
    if(userDetails){
      setUser(userDetails)
    }
  }

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout,user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };