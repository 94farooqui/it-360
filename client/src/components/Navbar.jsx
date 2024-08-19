import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [logged, setLogged] = useState(false)
    return (
        <div className='w-screen h-[4rem] bg-primary flex items-center justify-center'>
            <div className='w-[90%] h-full flex justify-between items-center'>
                <h1 className='font-poppins text-white text-3xl font-bold'>IT-360</h1>
                <ul className='text-white text-xl flex gap-4'>
                    <Link to='/'><li>Home</li></Link>
                    {logged ? <Link to='/login'><li>Logout</li></Link> : <Link to='/login'><li>Login</li></Link>}

                </ul>
            </div>
        </div>
    )
}

export default Navbar
