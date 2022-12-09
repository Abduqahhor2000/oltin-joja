import React, { useState, useEffect } from 'react'
import Admins from "./Admins"
import AddAdmin from './AddAdmin'
import { useLocation } from 'react-router-dom'

function Index() {
  const [root, setRoot] = useState("")
  const location = useLocation()

  useEffect(()=>{
    console.log(location)
    setRoot("")
  }, [location])


  switch(root) {
    case "product":
      return <Admins root={root} setRoot={setRoot}/>
    case "add":
      return <AddAdmin root={root} setRoot={setRoot}/>
    default:
      return <Admins root={root} setRoot={setRoot}/>
  }
}

export default Index