import { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


const PasswordToggle = ({ visible, setVisible }) => {
    const onChange = (e) => {
        e.preventDefault()
        setVisible(!visible)
    }
   
    
    
    return (
        <>
            <button  onClick={(e)=>onChange(e)}>
               {
                visible ?  <AiOutlineEye style={{fontSize:"23px"}} /> : <AiOutlineEyeInvisible  style={{fontSize:"23px"}}  />
               }
            </button>
        </>
    )
}

export default PasswordToggle;