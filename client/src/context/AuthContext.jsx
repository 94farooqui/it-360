import { fetchUser } from "@/services/api";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const fetchUserDetails = async (token) => {
    const userDetails = await fetchUser(token);
    console.log("Fetching user details from AuthContext");
    if (!userDetails) {
      setUser(null);
      setLoading(false);
    }

    console.log("Response User details", userDetails);
    setUser(userDetails);
    setLoading(false);
  };

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setUser(null)
      setToken(null)
    } else {
      fetchUserDetails(token);
    }
  }, [token]);

  // const fetchUserDetails = async (token) => {

  //   const userDetails = await fetchUser(token)
  //   if(userDetails){
  //     console.log("Response ", userDetails)
  //     setUser(userDetails)
  //   }
  //   else setUser(null)
  // }

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    fetchUserDetails(newToken);
    setToken(newToken);
    
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, user, setUser, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
