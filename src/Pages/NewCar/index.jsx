import {useState}from 'react'
import axios from 'axios'

const NewCar = () => {

   const[vehicleData, setVehicleData] = useState({
    owner:"",
    make:"",
    model:"",
    year:"",
    runs:false
   })

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vehicleData);
    axios({
        method: "POST",
        url: "/server/vehicles",
        data: vehicleData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
    }).then((res)=>{
        console.log(res);
       
    })
}


  return (
    <>
    <h1>Please Enter New Car Information:</h1>
    <form onSubmit={handleSubmit}>
        Owner:<input type="text" name="owner" value={vehicleData.owner} onChange={(e) => setVehicleData({...vehicleData,  owner:e.target.value})}/>
        Make:<input type="text" name="make" value={vehicleData.make} onChange={(e) => setVehicleData({...vehicleData,  make: e.target.value})}/>
        Model:<input type="text" name="model" value={vehicleData.model} onChange={(e) => setVehicleData({...vehicleData,  model:e.target.value})}/>
        Year:<input type="number" name="Year" value={vehicleData.year} onChange={(e) => setVehicleData({...vehicleData,  year:e.target.value})}/>
        Runs:<input type="checkbox" name="Runs" value={vehicleData.runs} onChange={(e) => setVehicleData({...vehicleData,  runs:e.target.value})}/>

      <button>Create Entry</button>


        </form>
   







    </>
  )
}

export default NewCar