import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

 const Login = () => {

const {backendUrl,token,setToken} = useContext(AppContext)
const navigate = useNavigate()

  const [state, setState] = useState('signup'); // Use lowercase 'signup' for consistency
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Your form submission logic here

    try{
      if(state === 'signup'){
        const {data} = await axios.post(backendUrl +'/api/user/register',{name,password,email})
        if(data.success){
          // localStorage.setItem('token',data.token)
          //   setToken(data.token)
          toast.success('Account created successfully. Please log in.');
        setState('login');
        }else{
          toast.error(data.message)
        }
      }else{
        const {data} = await axios.post(backendUrl +'/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
            setToken(data.token)
        }else{
          toast.error(data.message)
        }
      }
    }catch (error){
      toast.error(error.message)
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        {/* Corrected comparison for 'signup' state */}
        <p className='text-2xl font-semibold'>{state === 'signup' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'signup' ? "sign up" : "log in"} to book an appointment</p>
        
        {/* Full name field only shows in signup state */}
        {
          state === "signup" && (
            <div className='w-full'>
              <p>Full Name</p>
              <input
                className='border border-zinc-300 rounded w-full p-2 mt-1'
                type="text"
                onChange={(e) => setName(e.target.value)} // Set value correctly
                value={name}
                required
              />
            </div>
          )
        }

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button type="submit" className='bg-primary text-white w-full py-2 rounded-md'>
          {state === 'signup' ? "Create Account" : "Login"}
        </button>

        {/* Toggle between signup and login */}
        {
          state === "signup"
            ? <p>Already have an account? <span onClick={() => setState('login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create a new account? <span onClick={() => setState('signup')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  );
};

export default Login