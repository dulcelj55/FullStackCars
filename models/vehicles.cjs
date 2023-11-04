const mongoose= require ("mongoose")



const vehiclesSchema = new mongoose.Schema(
    {
    owner: String,
    make: String,
    model: String,
    year: Number,
    runs: Boolean,
    image: String
},

{
    timestamps: true
}
)
const Vehicles = mongoose.model("Vehicles",  vehiclesSchema)

module.exports= Vehicles