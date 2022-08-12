import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className=' bg-gray-900 shadow-lg text-white w-screen items-center text-center h-16 rounded m-5   text-3xl   '>

    <ul className='ml-36 mr-36 items-center flex gap-40 '> 
      <Link to='/Contact'>

      <li className='hover:bg-white hover:text-black p-2  rounded'>contact</li>
      </Link>
      <Link to='/'>
        <li className='hover:bg-white hover:text-black  rounded'>Home</li>

      </Link>
      <Link to='/SignIn'>
      <li className='hover:bg-white hover:text-black rounded'>SignIn</li>

      </Link>
      <Link to='/About'>

      <li className='hover:bg-cyan-300 hover:text-black  rounded'>About</li>
      </Link>
       
       
        
    </ul>

            </div>
        </div>
    )
}

export default Navbar