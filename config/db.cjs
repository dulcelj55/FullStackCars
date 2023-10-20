const mongoose = require('mongoose');
let connectionString = `mongodb+srv://dulcejaramillo:${process.env.MONGO_PASS}@cluster0.gke5cal.mongodb.net/Cars?retryWrites=true&w=majority`

console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});