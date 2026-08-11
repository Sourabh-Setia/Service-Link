let mongoose = require ("mongoose")

let infoSchema = new mongoose.Schema({
    name : {
        type : string,
    },
    age : {
        type : number
    },
    isActive:{
        type: boolean
    },
    userType :{
        type: string,
        default : "Seeker"
    },
    location: {
        type:string,
    },
    id : {
        type : number,
        unique : true
    }
    
})

let info = mongoose.model("info" , infoSchema)

module.exports = credentials; 