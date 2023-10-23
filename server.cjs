const express = require ('express')
const app = express ()
const PORT = 3000;
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')


const Vehicles =require('./models/Vehicles.cjs')
require('dotenv').config()
require('./config/db.cjs')

app.use(cors({
    origin: "*"
}))
app.use(express.json()); 
app.use(morgan('dev'))


app.post("/vehicles", async (req,res) => {
    console.log(req.body);
    let vehicles = req.body;
   let responseFromDB = await Vehicles.create(vehicles);
   console.log(responseFromDB);
    res.send("Route is good")
})




app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})