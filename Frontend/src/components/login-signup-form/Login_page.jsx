import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Name_of_the_app from "../other/Name_of_the_app";

function Login_page() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation
  const validate = () => {
    let tempErrors = {
      email: "",
      password: "",
    };

    let isValid = true;

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Enter a valid email address";
        isValid = false;
      }
    }

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

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/validate/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Server Response:", response.data);

      // Save token if backend returns one
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // Small delay for smooth transition
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (err) {
      setLoading(false);

      if (err.response) {
        alert(err.response.data.message || "Invalid credentials");
      } else {
        alert("Server not reachable or network error");
      }

      console.error("Error during login:", err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <Name_of_the_app />
        </div>
      </div>

      <div className="container-sm pt-3">
        <div className="row justify-content-center">
          <div className="col-8 col-md-8 col-lg-5">
            <div className="card text-center shadow-lg">
              <div className="card-body">
                <h5 className="card-header">
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
                    className="form-control text-center pt-2"
                    disabled={loading}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email}
                    </small>
                  )}
                </p>

                <p>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-control text-center pt-2"
                    disabled={loading}
                  />

                  {errors.password && (
                    <small className="text-danger">
                      {errors.password}
                    </small>
                  )}
                </p>
              </div>

              <div className="card-footer text-body-secondary">
                <button
                  className="btn btn-outline-info form-control w-50"
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Logging in...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>

                <p className="pt-2">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="text-decoration-none text-success"
                  >
                    {" "}
                    Sign up
                  </Link>
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