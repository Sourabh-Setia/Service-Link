let express = require("express"); 
let route = express.Router(); 
let logIn = require("./login"); 
let SignUp = require("./signup"); 

route.use("/validate" , logIn);
route.use("/validate" , SignUp)

module.exports= route; 