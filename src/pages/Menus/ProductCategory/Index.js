import React, { useEffect, useState } from 'react'
import ProductCategory from './ProductCategory';
import AddProduct from "../../AddProduct/AddProduct"
import { useLocation } from 'react-router-dom';

function Index(props) {
  const [root, setRoot] = useState("")
  const location = useLocation()

  useEffect(()=>{
    console.log(location)
    setRoot("")
  }, [location])

  console.log(props);

  switch(root) {
    case "product":
      return <ProductCategory root={root} setRoot={setRoot}/>
    case "add":
      return <AddProduct rootName={"Product category"} root={root} setRoot={setRoot}/>
    default:
      return <ProductCategory root={root} setRoot={setRoot}/>
  }
}

export default Index