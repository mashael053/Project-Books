import React from 'react'
import Navbar from '../Component/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LogIn() {

  const [name , setName] = React.useState("")
  const [password , setPassword] = React.useState("")
  const [data , setData] = React.useState([])
const navigator = useNavigate()
const handleLogin = ()=>{
  axios.get("https://655270245c69a779032a08a1.mockapi.io/api/signup/mashael")
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
    const findaccount = res.data.find(user => user.name === name && user.password === password)
    if(findaccount){
        localStorage.setItem("username", name)
  localStorage.setItem("id", findaccount.id)
  
      alert("Account is Found")
      navigator("/BookLibrary")
    }else{
      
      alert("Account Not Found")
    }
  })
  localStorage.setItem("username", name)

}

  return (
    <>

<Navbar></Navbar>

<div className='flex justify-center mt-9'>
        <div className='flex justify-evenly border-none w-[80vw] h-[90vh]'>
                <div className=' border-none bg-[#BEA98E] rounded-2xl w-96 m-auto h-[70vh] '>
                    <div className='flex flex-col gap-2 justify-center'>
                        
                    <h1 className='text-white mt-20 text-center text-2xl font-bold'>LogIn</h1>

                    {/* Input Name */}
                                <input 
                                 value={name} onChange={(e)=>{setName(e.target.value)}}
                                className='border-2 border-solid-black m-8 w-80 h-10 rounded-xl shadow-md max-sm:w-60'
                                placeholder='Enter Your Name'></input>
                  {/* Input Password */}
                    <input value={password} type='password' onChange={(e)=>{setPassword(e.target.value)}}
                    className='border-2 border-solid-black m-8 w-80 h-10 rounded-xl shadow-md max-sm:w-60'
                    placeholder='Enter Your Password'></input>

                    {/* button create acount */}
                <button onClick={handleLogin}
                 className='bg-black font-medium text-white w-48 p-2 ml-24 rounded-lg max-sm:ml-14'>LogIn</button>
                    </div>
                 </div>

          <div>
          <img  className='bg-gray-200 rounded-t-full w-96 mt-10 max-sm:hidden' src='https://images.pexels.com/photos/2167677/pexels-photo-2167677.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" />
          </div>
          </div>
                  </div>


    </>
  )
}

export default LogIn
