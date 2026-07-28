let mongoose = require("mongoose"); 

let credentialSchema = new mongoose.Schema({
    email :{
        type : String,
        required: true,
        unique: true
    },
    password:{
        type : String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now  
      }
})

let credentials = mongoose.model("credentials" , credentialSchema)

module.exports = credentials; 
