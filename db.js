const mongoose = require("mongoose");

const mongoDBURL = 'mongodb+srv://Tanya200115:mv4wVrJJVQZgESVE@cluster0.amftfr5.mongodb.net/test'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})
var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose