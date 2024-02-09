const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jell1umfish:dumanchik1337@cluster0.aa7euf6.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongo connect")
})
.catch(()=>{
    console.log("ne rabotayet")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

const collection = new mongoose.model("Collection1", LogInSchema);

module.exports=collection