import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!data.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(data.email)) {
        tempErrors.email = "Enter a valid email address";
        isValid = false;
      }
    }

    if (!data.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setError(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/users/validate/signup",
        data
      );

      alert(response.data.message || response.data || "Account created successfully!");

      console.log("Response:", response.data);

      setData({
        email: "",
        password: "",
      });

      setError({
        email: "",
        password: "",
      });

    } catch (err) {
      console.error("Signup Error:", err);

      if (err.response) {
        alert(err.response.data.message || err.response.data);
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row g-0">
          {/* LEFT SECTION */}
          <div className="col-md-6 d-flex align-items-center justify-content-center vh-100 left-section text-dark">
            <div className="text-center p-4">
              <h1 className="fw-bold display-5 mb-3">Service Link</h1>
              <p className="lead mb-2">
                We welcome you to our one-stop service platform.
              </p>
              <p>Register yourself to find your perfect service in town!</p>

              <footer className="text-center py-3 mt-5">
                <p>© 2025 Service Link. All Rights Reserved.</p>
                <p>info@servicelink.com</p>
              </footer>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-md-6 d-flex align-items-center justify-content-center vh-100 right-section">
            <div
              className="card shadow-sm p-4 rounded-4 bg-white"
              style={{ width: "80%", maxWidth: "400px" }}
            >
              <div className="card-header bg-white border-0 text-center mb-3">
                <h4 className="fw-semibold">Let's Get Started</h4>
              </div>

              <form className="card-body" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-control form-control-lg"
                  />
                  {error.email && (
                    <small className="text-danger">{error.email}</small>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-control form-control-lg"
                  />
                  {error.password && (
                    <small className="text-danger">{error.password}</small>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2 fw-semibold"
                >
                  Sign Up
                </button>

                <p className="pt-3 text-center">
                  Already a user? Click to -
                  <Link
                    to="/login"
                    className="text-decoration-none"
                    style={{ color: "green" }}
                  >
                    {" "}
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;