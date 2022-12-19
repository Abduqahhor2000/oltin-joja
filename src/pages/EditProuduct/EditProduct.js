import React from 'react'
import EditInfo from './EditProductContent'


function EditProduct() {
  return (
    <div className='pb-5 px-10'>
      <div className='w-full flex items-center bg-white px-5 h-12 rounded-xl  mt-5'>
        <div className='flex justify-between items-center w-[220px] '>
          <h1 className='text-Primary/03 t ext-lg '>Product list</h1>
          <span className='text-[#7C7E80]'>/</span>
          <h1 className='text-[#7C7E80] text-lg'>Product info</h1>
        </div>
      </div>

      <div className='w-full h-full  bg-white   mt-5 rounded-xl px-7 py-2 '>
        <EditInfo />
            </div>
    </div>
  )
}

export default EditProduct