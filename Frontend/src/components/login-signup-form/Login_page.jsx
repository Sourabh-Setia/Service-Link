import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowRight, FiCheckCircle, FiLock, FiMail, FiShield, FiStar } from "react-icons/fi";
import "./Auth.css";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const validate = () => {
    const tempErrors = {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

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

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      window.setTimeout(() => {
        navigate("/dashboard");
      }, 900);
    } catch (err) {
      setLoading(false);

      if (err.response) {
        alert(err.response.data.message || "Invalid credentials");
      } else {
        alert("Server not reachable or network error");
      }
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-layout">
        <section className="auth-showcase">
          <div className="auth-showcase-inner">
            <div className="auth-badge">ServiceLink</div>
            <h1>Log in and get your next service booked in minutes.</h1>
            <p className="auth-showcase-copy">
              Trusted providers, cleaner scheduling, and one place to manage every job around you.
            </p>

            <div className="auth-feature-grid">
              <div className="auth-feature-card">
                <span className="auth-feature-icon">
                  <FiShield size={18} />
                </span>
                <div>
                  <strong>Verified providers</strong>
                  <small>Browse trusted professionals near you.</small>
                </div>
              </div>

              <div className="auth-feature-card">
                <span className="auth-feature-icon">
                  <FiCheckCircle size={18} />
                </span>
                <div>
                  <strong>Easy booking flow</strong>
                  <small>Track chats, bookings, and history in one dashboard.</small>
                </div>
              </div>
            </div>

            <div className="auth-metric-row">
              <div className="auth-metric-card">
                <span>24/7</span>
                <small>Booking access</small>
              </div>
              <div className="auth-metric-card">
                <span>4.9/5</span>
                <small>User satisfaction</small>
              </div>
              <div className="auth-metric-card">
                <span>100+</span>
                <small>Service categories</small>
              </div>
            </div>
          </div>
        </section>

        <section className="auth-panel">
          <div className="auth-card">
            <div className="auth-card-header">
              <div className="auth-eyebrow">
                <FiStar size={14} />
                Welcome back
              </div>
              <h2>Sign in to your account</h2>
              <p>Use your email and password to continue to your dashboard.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label htmlFor="login-email">Email address</label>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon">
                    <FiMail size={16} />
                  </span>
                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    disabled={loading}
                  />
                </div>
                {errors.email && <small className="auth-error">{errors.email}</small>}
              </div>

              <div className="auth-field">
                <div className="auth-label-row">
                  <label htmlFor="login-password">Password</label>
                  <span>Minimum 6 characters</span>
                </div>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon">
                    <FiLock size={16} />
                  </span>
                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    disabled={loading}
                  />
                </div>
                {errors.password && <small className="auth-error">{errors.password}</small>}
              </div>

              <button className="auth-primary-btn" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    Signing you in...
                  </>
                ) : (
                  <>
                    Continue to dashboard
                    <FiArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer-note">
              New to ServiceLink? <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login_page;
