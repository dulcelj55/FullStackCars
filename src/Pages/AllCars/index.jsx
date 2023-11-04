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
    <div> Show All Cars:
        {vehicle.map((vehicle) =>
        <div key={JSON.stringify(vehicle)}>
             {/* <br/> */}
            {vehicle.make}<br/>
            {vehicle.model}<br/>
           {vehicle.owner}
            {vehicle.runs}
            {vehicle.image}
            
            </div>)}





    </div>
  )
}

export default AllCars