import React from 'react'
import ProductForm from './AddProductForm'
import {useNavigate} from "react-router-dom"

function AddProduct({root}) {
    const navigate = useNavigate()
    // console.log(location);
    return (
        <div className='pb-5 px-10'>
            <div className='w-full flex items-center bg-white px-5 h-12 rounded-xl mt-5'>
                <div className='flex justify-between items-center min-w-max'>
                    <h1 onClick={() => navigate(root.path)} className='text-Primary/03 text-lg cursor-pointer'>{root.text}</h1>
                    <span className='text-[#7C7E80] mx-1'>/</span>
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