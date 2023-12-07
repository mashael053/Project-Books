import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
function Navbar() {
  return (
    <div>

    {/* big div all contact */}
    <div className='h-14 bg-[#BEA98E]'>
    <div className=' flex justify-between'>
        <div className='flex gap-2 '>
            <img  className=" h-12 rounded-lg  ml-3"src={Logo}></img>
            <h1 className='mt-2 font-sans text-2xl font-bold text-white'>Books Library</h1>
        </div>

                <div className='flex gap-5 mt-3'>
                <Link to="/SignUp">
                <button className='bg-white border-2 font-sans rounded-lg p-1 font-medium'>SignUp</button>

                </Link>
                <Link to="/LogIn">
                <button className='mr-9 p-1 font-sans font-medium'>LogIn</button>
                </Link>

        </div>
    </div>
   {/* End div big */}
</div>









    </div>
  )
}

export default Navbar