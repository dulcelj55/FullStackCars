import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import AllCars from './Pages/AllCars'
import NewCar from './Pages/NewCar'
import SingleCar from './Pages/SingleCar'



function App() {
  

  return (
    <>
    
    <h1 id="h1">DJ's Auto Shop</h1>
    <nav id="navbar">
    <Link to="/">
        Home
      </Link>
      
      <Link to="/allcars">
        All Cars
      </Link>
      <Link to="/newcar">
        New Car Regestration
      </Link>
      <Link to="/singlecar">
        Single Car
      </Link>
    </nav>
<Routes>
<Route path='/' element= {<AllCars/>}/>
<Route path='/newcar' element= {<NewCar/>}/>
<Route path='/singlecar' element= {<SingleCar/>}/>


</Routes>


    </>
  )
}

export default App
