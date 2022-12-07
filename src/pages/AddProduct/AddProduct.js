import React from 'react'
import ProductForm from './AddProductForm'

function AddProduct() {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='w-full flex items-center bg-white px-5 h-12 rounded-xl  mt-5'>
                <div className='flex justify-between items-center w-[220px] '>
                    <h1 className='text-Primary/03 text-lg '>Product list</h1>
                    <span className='text-[#7C7E80]'>/</span>
                    <h1 className='text-[#7C7E80] text-lg'>Add product</h1>
                </div>
            </div>

            <div className='w-full bg-white h-full mt-5 rounded-xl p-5'>
                <ProductForm />
            </div>
        </div>
    )
}

export default AddProduct