import React from 'react'
import Navbar from '../Component/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
 const [name , setname] = React.useState("")
 const [email, setemail] = React.useState("")
 const [password , setpassword] = React.useState("")
const navigate = useNavigate()

const handleCreate = ()=>{
  axios.post("https://655270245c69a779032a08a1.mockapi.io/api/signup/mashael",{
    name: name, 
    email:email, 
    password:password
  })
  .then((res)=>{
    console.log(res);
  })
  .catch(()=>{
    console.log("error")
  });

   if (name.length < 4) {
    alert('Name should be at least 4 characters long.');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please Enter valid Email');
    return;
  }
  const passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}$/;
  if (passwordRegex.test(password)) {
    alert('Password Should Contain at least one letter and one Number');
    return;
  }
navigate("/LogIn")
}

  return (
    <>

<Navbar></Navbar>

<div className='flex justify-center mt-9'>
        <div className='flex justify-evenly border-none w-[80vw] h-[90vh] '>
                <div className='border-slate-700 border-none bg-[#BEA98E] rounded-2xl w-96 h-[80vh] m-auto'>
                    <div className='flex flex-col justify-center'>
                        
                    <h1 className='text-white mt-20 text-center text-2xl font-bold'>Create Account</h1>

                    {/* Input Name */}
                                <input value={name} onChange={(e)=>{setname(e.target.value)}}
                                type='text'
                                className='border-2 border-solid-black m-8 w-80 h-10 rounded-xl shadow-md max-sm:w-60'
                                placeholder='Enter Your Name'></input>

                    <input value={email} onChange={(e)=>{setemail(e.target.value)}}
                    type='email'
                     className='border-2 border-solid-black m-8 w-80 h-10 rounded-xl shadow-md max-sm:w-60'
                     placeholder='Enter Your Email'></input>


                    <input value={password} onChange={(e)=>{setpassword(e.target.value)}}
                    type='password'
                    className='border-2 border-solid-black m-8 w-80 h-10 rounded-xl shadow-md max-sm:w-60'
                    placeholder='************'></input>

                    {/* button create acount */}
                <button onClick={handleCreate}
                className='bg-black font-medium text-white w-48 p-2 ml-24 mt-9 rounded-lg max-sm:ml-14'>Create account</button>
                    </div>
                 </div>

          <div className=''>

          <img className=' max-sm:hidden bg-gray-200 rounded-t-full w-96 mt-10' src='https://images.pexels.com/photos/4855351/pexels-photo-4855351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                            </div>
          </div>
          </div>


    </>
  )
}

export default SignUp