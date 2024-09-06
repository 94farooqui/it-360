import { AuthContext } from "@/context/AuthContext";
import { userLogin } from "@/services/api";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initalUserDetails = {
  username: "",
  password: "",
};

const Login = () => {
  const [userDetails, setUserDetails] = useState(initalUserDetails);
  const {token, login, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const onValueChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await userLogin(userDetails)
        if(response){
            console.log(response)
            login(response)
            navigate('/')
        }
    }
    catch(error){
        console.log(response)
        return
    }
    
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[1000px] bg-white rounded-xl shadow-md flex overflow-hidden">
        <div className="flex-1 bg-slate-950 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">IT 360</h1>
        </div>

        <div className="flex-1 py-12 px-8 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-slate-950">Login</h2>
          <form onSubmit={handleLoginSubmit} className="w-full mt-4 flex flex-col gap-4 text-lg">
            <input
              name="username"
              defaultValue={userDetails.username}
              onChange={(e) => onValueChange(e)}
              type="text"
              className="p-2 focus:bg-slate-100 rounded-lg outline-none border-2 border-slate-800"
              placeholder="Username"
            />

            <input
              type="password"
              name="password"
              onChange={(e) => onValueChange(e)}
              defaultValue={userDetails.password}
              className="p-2 focus:bg-slate-100 rounded-lg border-2 border-slate-800"
              placeholder="Password"
            />

            <button type="submit" className="p-2 text-lg font-semibold text-slate-100 bg-slate-950 rounded-lg self-start px-8 ">
              Login
            </button>
          </form>
          <p className="mt-8">
            Don't have an account?{" "}
            <Link to="/signup" className="text-slate-400">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
