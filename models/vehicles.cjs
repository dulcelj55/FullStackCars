const mongoose= require ("mongoose")



const vehiclesSchema = new mongoose.Schema(
    {
    Owner: String,
    Make: String,
    Model: String,
    Year: Number,
    Runs: Boolean
},

{
    timestamps: true
}
)
const Vehicles = mongoose.model("Vehicles",  vehiclesSchema)