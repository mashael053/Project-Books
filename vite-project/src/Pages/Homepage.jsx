import React from 'react'
import Navbar from '../Component/Navbar'


function Homepage() {
  return (
    <>
<Navbar></Navbar>

<div className="h-[100vh] w-full bg-cover bg-gray-100">
    <div className=' flex justify-evenly max-sm:flex max-sm:flex-col'>
        <div className='flex justify-center items-center'>
        <h1 className='font-sans text-xl font-thin max-sm:text-sm max-sm:mt-9'> “Welcome to the enchanting and knowledgeable world of books.<br></br>
         Embark on an unforgettable journey of discovery within our pages.”</h1>
        </div>
        <div className='flex'>
        <img className='bg-gray-200 rounded-t-full w-96 mt-10 max-sm:w-80 max-sm:ml-12'src="https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>  
        </div>
    </div>


   {/* End div big */}
</div>


    </>
  )
}

export default Homepage