import React, { useState, useEffect } from 'react'
import CustomersReview from './CustomersReview';
import { useLocation } from 'react-router-dom';

function Index() {
  const [root, setRoot] = useState("")
  const location = useLocation()

  useEffect(()=>{
    console.log(location)
    setRoot("")
  }, [location])

  switch(root) {
    case "product":
      return <CustomersReview root={root} setRoot={setRoot}/>
    default:
      return <CustomersReview root={root} setRoot={setRoot}/>
  }
}

export default Index