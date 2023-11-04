import {useEffect, useState} from 'react'
import axios from 'axios'

const SingleCar = () => {
  const [vehicle, setVehicle]= useState([]);

    useEffect(()=>{
        axios({
            method: "GET",
            url: "/server/vehicleMake",
        }).then((res)=>{
            console.log(res.data);
            setVehicle(res.data)
        })
    },[])




  return (
    <div> 
      <form >
      Search for: <input placeholder="Type of Car"  type="text" name="make" value={vehicle} onChange={(e) => setVehicle({...vehicle,  make: e.target.value})}></input>
      </form>
    


    </div>
  )
}

export default SingleCar