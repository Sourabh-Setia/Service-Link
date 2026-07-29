const { string, number } = require("joi")
let mongoose = require ("mongoose")

let infoSchema = new mongoose.Schema({
    name : {
        type : string,
    },
    age : {
        type : number
    },
    
})