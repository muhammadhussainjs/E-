import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Singleproduct from '../../pages/singleproduct/Singleproduct'


const Routers = () => {
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='product/:id' element={<Singleproduct/>}/>

</Routes>
</BrowserRouter>

  )
}

export default Routers