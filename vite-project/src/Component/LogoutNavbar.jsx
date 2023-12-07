import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
function LogoutNavbar() {
const username = localStorage.getItem("username")

  return (
    <div>

    {/* big div all contact */}
    <div className='h-14 bg-[#BEA98E]'>
    <div className=' flex justify-between'>
        <div className='flex gap-2 '>
            <img  className=" h-12 rounded-lg  ml-3 "src={Logo}></img>
            <h1 className='mt-2 font-sans text-2xl font-bold text-white max-sm:text-sm'>Books Library</h1>
        </div>

                <div className='flex gap-5 mt-3 max-sm:gap-1'>
                <h1 className='font-bold text-white text-xl max-sm:text-sm'>{username}</h1>
                <Link to="/FavourtsBooks">
                <button className='bg-white border-2 font-sans rounded-lg p-1 font-medium max-sm:text-sm'>Favorite</button>
                </Link>
                <Link to="/DisplayBook">
                <button className='bg-white border-2 font-sans rounded-lg p-1 font-medium max-sm:text-sm'>DisplayBook</button>
                </Link>
                <Link to="/">
                <button className='bg-white border-2 font-sans rounded-lg p-1 font-medium max-sm:text-sm'>LogOut</button>
                </Link>
        
        </div>
    </div>
   {/* End div big */}
</div>









    </div>
  )
}
export default LogoutNavbar