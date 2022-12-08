import React, { useState, useEffect } from 'react'
import CustomersList from './CustomersList';
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
      return <CustomersList root={root} setRoot={setRoot}/>
    default:
      return <CustomersList root={root} setRoot={setRoot}/>
  }
}

export default Index