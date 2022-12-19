import React from 'react'

function Modal({children}) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/20 z-[100]'>
        <div className='fixed m-auto inset-0 w-fit h-fit'>
            {children}
        </div>
    </div>
  )
}

export default Modal