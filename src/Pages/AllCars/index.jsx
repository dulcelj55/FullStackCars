import axios from 'axios'
import {useState, useEffect} from 'react'


const AllCars = () => {
    const [vehicle, setVehicle]= useState([]);

    useEffect(()=>{
        axios({
            method: "GET",
            url: "/server/vehicles",
        }).then((res)=>{
            console.log(res.data);
            setVehicle(res.data)
        })
    },[])





  return (
    <div>Show all cars:
        {vehicle.map((frutit)=>
        <div key={JSON.stringify(vehicle)}>
            {vehicle.owner}
            {vehicle.make}
            {vehicle.model}
            {vehicle.runs}
            
            </div>)}





    </div>
  )
}

export default AllCars