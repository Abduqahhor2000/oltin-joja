import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import LoginForm from "./LoginForm"
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {


  return (
    <div className='flex w-full'>
      <div className='w-1/2 h-[100vh] border '>
        <img src='/loginBackground.png' className='object-cover w-full h-full' />
      </div>
      <div className='w-1/2 h-[100vh]  flex justify-center items-center'>
        <div className='w-8/12   w-full '>
          <h1 className='text-5xl tracking-[.05em] font-rowdies text-Primary/03 text-center'>Oltin Jo'ja</h1>
          <div className='flex flex-wrap justify-center items-center'>
            <h2 className='w-full text-center mt-5 text-xl font-bold'>Login to Account</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login