import React, { useState } from 'react'
import AddProduct from "../../AddProduct/AddProduct"
import ProductList from './ProductList';

function Index() {
  const [root, setRoot] = useState("")

  switch(root) {
    case "product":
      return <ProductList root={root} setRoot={setRoot}/>
    case "add":
      return <AddProduct rootName={"Product category"} root={root} setRoot={setRoot}/>
    default:
      return <ProductList root={root} setRoot={setRoot}/>
  }
}

export default Index