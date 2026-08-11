let mongoose = require ("moongose");

let serviceInfo = new mongoose.Schema({
    location :{
        type : String,
        require: true,
    },
    experience: {
        type : Number
    },
    
})