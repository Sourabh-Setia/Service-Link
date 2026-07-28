let express = require("express"); 
let route = express.Router(); 
let joi = require("joi"); 
let bcrypt = require("bcrypt");
let jwt= require("jsonwebtoken")
let userValue = require("../../model/credential_schema/user_credentials");


let joiSchema = joi.object({
email : joi.string().email().required(),
password : joi.string().min(6).required()
})

route.post('/login' , async (req, res)=>{

    try{

     let { error } = joiSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message); // descriptive error
    }

    let {email , password} = req.body;
    

    let user = await userValue.findOne({email}); 

    if(!user){
      return  res.status(404).send("User not found")
    }

    let isMatch = await bcrypt.compare(password, user.password); 

    if(!isMatch){
        return res.status(401).send("Wrong password"); 
    }
   

    let token = jwt.sign(
        {userId : user._id , email : user.email},
         "mykey" , 
         {expiresIn: "1h"}
    )

    res.status(200).json({message : "Login Successfull" , token})

    }catch (err){
       res.status(500).send("error in login")
    }   
     
})
module.exports = route; 