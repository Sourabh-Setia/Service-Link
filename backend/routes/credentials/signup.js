let express = require("express")
let bcrypt = require("bcrypt");
let route = express.Router(); 
let userValue = require("../../model/credential_schema/user_credentials")

route.post("/signup", async (req,res)=>{

    try{
        let {email , password} = req.body; 

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });

        }

   let existingUser = await userValue.findOne({email}); 
   if(existingUser){
    return  res.status(400).send("user already exists")
   }

   let hashPass = await bcrypt.hash(password,5); 

   let newUser = new userValue({
    email, 
    password : hashPass
   })

   await newUser.save(); 

   res.status(201).json({
    message: "User created successfully",
  });
    }catch (err) {
        console.error(err);
    
        res.status(500).json({
            message: "Error creating new profile",
            error: err.message
        });
    }
    
})

module.exports = route; 