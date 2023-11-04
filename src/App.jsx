import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import AllCars from './Pages/AllCars'
import NewCar from './Pages/NewCar'
import SingleCar from './Pages/SingleCar'
import mater from '/src/assets/materpic.jpeg'
import Navbar from './components/Navbar'




function App() {
  

  return (
    <>
    
    <h1 id="h1">DJ's Auto Shop</h1>
    <br/>
    <Navbar/>
    <img id="mater" src= {mater} alt="mater image" height="300" width= "300"/>
<Routes>
<Route path='/allcars' element= {<AllCars/>}/>
<Route path='/newcar' element= {<NewCar/>}/>
<Route path='/singlecar' element= {<SingleCar/>}/>
</Routes>


    </>
  )
}

export default App
