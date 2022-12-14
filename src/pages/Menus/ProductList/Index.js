// import React, { useState, useEffect } from 'react'
// import AddProduct from "../../AddProduct/AddProduct"
// import ProductList from './ProductList';
// import { useLocation } from 'react-router-dom';

// function Index() {
//   const [root, setRoot] = useState("")
//   const location = useLocation()

//   useEffect(()=>{
//     console.log(location)
//     setRoot("")
//   }, [location])

//   switch(root) {
//     case "product":
//       return <ProductList root={root} setRoot={setRoot}/>
//     case "add":
//       return <AddProduct rootName={"Product category"} root={root} setRoot={setRoot}/>
//     default:
//       return <ProductList root={root} setRoot={setRoot}/>
//   }
// }

// export default Index