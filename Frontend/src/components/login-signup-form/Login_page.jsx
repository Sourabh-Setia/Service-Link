import { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { PiTrademark } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from "axios";
import Name_of_the_app from "../other/Name_of_the_app";
// import SignupPage from "./Signup_page";



function Login_page() {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // handle input change
  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // validation function
  let validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else {
      // regex for email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Enter a valid email address";
        isValid = false;
      }
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // handle submit
  let handleSubmit = async (e) => {
    e.preventDefault();


    if (validate()) {
     
    
    try{
      let response = await axios.post("http://localhost:3000/users/existing/login" , {
        email : formData.email,
        password : formData.password
      });

      console.log("Server Response:", response.data);
      alert("Login successful!");
    
      setFormData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });

    } catch(err){
      if (err.response) {
        alert(err.response.data.message || "Invalid credentials");
      } else {
        alert("Server not reachable or network error");
      }

      console.error("Error during login:", err);

    }
  }

    
  };

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <Name_of_the_app />
        </div>
      </div>

      <div className="container-sm pt-3 ">
        <div className="row justify-content-center">
          <div className="col-8 col-md-8 col-lg-5">
            <div className="card text-center shadow-lg">
              <div className="card-body">
                <h5 className="card-header ">
                  Login Your Account 
                </h5>
              </div>
              <div className="card-body">
                <p>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="text-center pt-2 form-control"
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </p>
                <p>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Password"
                    className="text-center pt-2 form-control "
                  />
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </p>
              </div>
              <div className="card-footer text-body-secondary">
                <button
                  className="btn btn-outline-info form-control w-50"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Submit
                </button>

                <p className="pt-2">Don't have any account? 
                  
                  <Link to="/signup" className="text-decoration-none text-success" > Sign up</Link>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row justify-content-center pt-2">
          <footer className="text-center py-3">
            <p>© 2025 Service Link. All Rights Reserved.</p>
            <p>info@servicelink.com</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login_page;
