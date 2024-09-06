import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-gray-100'>
            <div className='w-[1000px] bg-white rounded-xl shadow-md flex overflow-hidden'>
                <div className='flex-1 bg-slate-950 flex justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'>IT 360</h1>
                </div>

                <div className='flex-1 py-12 px-8 flex flex-col items-start'>
                    <h2 className='text-3xl font-bold text-slate-950'>Signup</h2>
                    <form className='w-full mt-4 flex flex-col gap-4 text-lg'>
                      
                            <input type='text' className='p-2 focus:bg-slate-100 rounded-lg outline-none border-2 border-slate-800' placeholder='Fullname'/>
                            <input type='text' className='p-2 focus:bg-slate-100 rounded-lg outline-none border-2 border-slate-800' placeholder='Email'/>
                      
                        
                            <input type='password' className='p-2 focus:bg-slate-100 rounded-lg border-2 border-slate-800' placeholder='Password'/>
                            <input type='password' className='p-2 focus:bg-slate-100 rounded-lg border-2 border-slate-800' placeholder='Confirm Password'/>

                     
                        <button className='p-2 text-lg font-semibold text-slate-100 bg-slate-950 rounded-lg self-start px-8 '>Signup</button>
                    </form>
                    <p className='mt-8'>Already have an account? <Link to='/login' className='text-slate-400'>Login</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Signup
