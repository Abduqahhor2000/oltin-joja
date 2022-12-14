// import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import Categories from './Categories'

// function Index() {
//   const [root, setRoot] = useState("")
//   const location = useLocation()

//   useEffect(()=>{
//     console.log(location)
//     setRoot("")
//   }, [location])


//   switch(root) {
//     case "product":
//       return <Categories root={root} setRoot={setRoot}/>
//     default:
//       return <Categories root={root} setRoot={setRoot}/>
//   }
// }

// export default Index