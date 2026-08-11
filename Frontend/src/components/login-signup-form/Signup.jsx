import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FiAward,
  FiArrowRight,
  FiCheckCircle,
  FiLock,
  FiMail,
  FiMapPin,
  FiShield,
} from "react-icons/fi";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const tempErrors = {};
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/users/validate/signup", data);

      setData({
        email: "",
        password: "",
      });
      setError({
        email: "",
        password: "",
      });
      setShowModal(true);

      window.setTimeout(() => {
        setShowModal(false);
        navigate("/login");
      }, 2000);
    } catch (err) {
      setLoading(false);

      if (err.response) {
        alert(err.response.data.message || err.response.data);
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
    <>
      <div className="auth-shell auth-shell-signup">
        <div className="auth-layout auth-layout-reversed">
          <section className="auth-showcase">
            <div className="auth-showcase-inner">
              <div className="auth-badge">Join ServiceLink</div>
              <h1>Create your account and start booking with confidence.</h1>
              <p className="auth-showcase-copy">
                Set up your account once, then manage bookings, messages, and trusted providers from one place.
              </p>

              <div className="auth-feature-grid">
                <div className="auth-feature-card">
                  <span className="auth-feature-icon">
                    <FiAward size={18} />
                  </span>
                  <div>
                    <strong>Fast setup</strong>
                    <small>Create your account in seconds and complete details later.</small>
                  </div>
                </div>

                <div className="auth-feature-card">
                  <span className="auth-feature-icon">
                    <FiShield size={18} />
                  </span>
                  <div>
                    <strong>Reliable service</strong>
                    <small>Book verified professionals and manage everything clearly.</small>
                  </div>
                </div>
              </div>

              <div className="auth-metric-row">
                <div className="auth-metric-card">
                  <span>2 min</span>
                  <small>Average signup flow</small>
                </div>
                <div className="auth-metric-card">
                  <span>4.9/5</span>
                  <small>Service experience</small>
                </div>
                <div className="auth-metric-card">
                  <span>Local</span>
                  <small>Providers near you</small>
                </div>
              </div>
            </div>
          </section>

          <section className="auth-panel">
            <div className="auth-card">
              <div className="auth-card-header">
                <div className="auth-eyebrow">
                  <FiCheckCircle size={14} />
                  Create your account
                </div>
                <h2>Start your ServiceLink journey</h2>
                <p>Use your email and password to get started. You can complete the rest of your profile after signup.</p>
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                  <label htmlFor="signup-email">Email address</label>
                  <div className="auth-input-wrap">
                    <span className="auth-input-icon">
                      <FiMail size={16} />
                    </span>
                    <input
                      id="signup-email"
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={loading}
                    />
                  </div>
                  {error.email && <small className="auth-error">{error.email}</small>}
                </div>

                <div className="auth-field">
                  <div className="auth-label-row">
                    <label htmlFor="signup-password">Password</label>
                    <span>Use at least 6 characters</span>
                  </div>
                  <div className="auth-input-wrap">
                    <span className="auth-input-icon">
                      <FiLock size={16} />
                    </span>
                    <input
                      id="signup-password"
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      placeholder="Create a secure password"
                      disabled={loading}
                    />
                  </div>
                  {error.password && <small className="auth-error">{error.password}</small>}
                </div>

                <button type="submit" className="auth-primary-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create account
                      <FiArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="auth-footer-note">
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {showModal && (
        <div className="auth-modal-backdrop">
          <div className="auth-modal-card">
            <div className="auth-modal-icon">
              <FiCheckCircle size={34} />
            </div>
            <h3>Account created</h3>
            <p>Your profile is ready. Redirecting you to the login page.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
