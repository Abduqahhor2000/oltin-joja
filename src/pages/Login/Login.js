import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import PasswordToggle from './PasswordToggle'

function Login() {
  const [visible, setVisible] = useState(true)
  const [formValue, setFormValue] = useState({
    phone: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);

  }

  const onChange = (e) => {
    // console.log(e.target.value);
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

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
            <form onSubmit={handleSubmit} className='border rounded-lg p-5 mt-5 h-72 flex flex-wrap'>
              <div className="relative w-full border outline-none px-3 mt-5 flex items-center valid:border-green-300 rounded-lg focus:border-Primary/03 ">
                <input onChange={onChange} name="phone" className='peer w-full outline-none' type='text' />
            <span className="absolute top-2 left-4 ">
              Phone number
            </span>
              </div>
              <div className='w-full border  rounded-lg mt-5 px-3 flex items-center'>
                <input onChange={onChange} name="password" className='w-full outline-none' placeholder='Password' type={visible ? "text" : "password"} />
                <PasswordToggle visible={visible} setVisible={setVisible} />
              </div>
              <div className='flex justify-end w-full mt-5'><p className='underline-offset-1 underline cursor-pointer '>Forgot password</p></div>
              <input type="submit" className='bg-Primary/03 w-full h-12 rounded-lg text-white text-lg' value="Sign in" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login