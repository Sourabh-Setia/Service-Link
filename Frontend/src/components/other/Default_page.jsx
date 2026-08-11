import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCompass, FiHome, FiMapPin, FiMessageCircle } from "react-icons/fi";
import "./Default_page.css";

const quickLinks = [
  {
    title: "Go to Login",
    description: "Return to your account and continue booking services.",
    to: "/login",
    icon: <FiHome size={18} />,
  },
  {
    title: "Create Account",
    description: "Join ServiceLink and start managing your services in one place.",
    to: "/signup",
    icon: <FiCompass size={18} />,
  },
];

const Default_page = () => {
  return (
    <div className="default-shell">
      <div className="default-layout">
        <section className="default-hero">
          <div className="default-badge">ServiceLink</div>
          <h1>This page took a wrong turn.</h1>
          <p className="default-copy">
            The address you opened is not active right now, but the right destination is only one click away.
          </p>

          <div className="default-pill-row">
            <div className="default-pill">
              <span className="default-pill-dot"></span>
              Secure login
            </div>
            <div className="default-pill">
              <FiMapPin size={13} />
              Local services
            </div>
          </div>

          <div className="default-graphic">
            <div className="default-orbit default-orbit-one"></div>
            <div className="default-orbit default-orbit-two"></div>
            <div className="default-core">
              <span>404</span>
              <small>Page not found</small>
            </div>
          </div>
        </section>

        <section className="default-panel">
          <div className="default-card">
              <div className="default-card-top">
                <div className="default-icon-wrap">
                  <FiMessageCircle size={22} />
                </div>
                <div>
                  <h2>Let’s get you back on track</h2>
                  <p>Choose the best way back into ServiceLink.</p>
                </div>
              </div>

            <div className="default-link-list">
              {quickLinks.map((item) => (
                <Link key={item.title} to={item.to} className="default-link-card">
                  <div className="default-link-icon">{item.icon}</div>
                  <div className="default-link-content">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                  <FiArrowRight size={18} className="default-link-arrow" />
                </Link>
              ))}
            </div>

            <div className="default-footer-note">
              If you typed the address manually, check the URL and try again.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Default_page;
