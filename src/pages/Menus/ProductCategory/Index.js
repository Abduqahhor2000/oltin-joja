import React, { useState } from 'react'
import ProductCategory from './ProductCategory';
import AddProduct from "../../AddProduct/AddProduct"

function Index() {
  const [root, setRoot] = useState("")

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