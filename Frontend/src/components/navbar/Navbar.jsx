import React, { useState } from "react";
import { CgProfile, CgSearch } from "react-icons/cg";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FiMessageCircle, FiClock, FiCalendar } from "react-icons/fi";
import "./Navbar.css";

const menuItems = [
  {
    id: "findservice",
    label: "Find Services",
    icon: <CgSearch size={20} />,
  },
  {
    id: "chats",
    label: "Chats",
    icon: <FiMessageCircle size={19} />,
  },
  {
    id: "bookings",
    label: "Your Bookings",
    icon: <FiCalendar size={19} />,
  },
  {
    id: "service-history",
    label: "Service History",
    icon: <FiClock size={19} />,
  },
];

const Navbar = ({ activePage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  const getActivePageName = () => {
    const active = menuItems.find((item) => item.id === activePage);

    return active ? active.label : "Profile";
  };

  return (
    <nav className="navbar-container">
      <div className="desktop-navbar d-none d-md-flex">
        <div className="brand-section">
          <div className="brand-icon">S</div>

          <div>
            <h5 className="brand-name">ServiceLink</h5>
            <small>Connect. Book. Get it done.</small>
          </div>
        </div>

        <div className="desktop-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`desktop-nav-item ${
                activePage === item.id ? "active" : ""
              }`}
              onClick={() => handleClick(item.id)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={`profile-button ${
            activePage === "profile" ? "active" : ""
          }`}
          onClick={() => handleClick("profile")}
        >
          <CgProfile size={23} />
          <span>Profile</span>
        </button>
      </div>

      <div className="mobile-navbar d-md-none">
        <div className="mobile-left">
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={25} />}
          </button>

          <div>
            <div className="mobile-page-title">{getActivePageName()}</div>
            <div className="mobile-brand">ServiceLink</div>
          </div>
        </div>

        <button
          className={`mobile-profile ${
            activePage === "profile" ? "active" : ""
          }`}
          onClick={() => handleClick("profile")}
        >
          <CgProfile size={25} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu d-md-none">
          <div className="mobile-menu-header">
            <div>
              <small>MENU</small>
              <h6>ServiceLink</h6>
            </div>
          </div>

          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-item ${
                activePage === item.id ? "active" : ""
              }`}
              onClick={() => handleClick(item.id)}
            >
              <span className="mobile-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {activePage === item.id && <span className="active-dot"></span>}
            </button>
          ))}

          <button
            className={`mobile-nav-item ${
              activePage === "profile" ? "active" : ""
            }`}
            onClick={() => handleClick("profile")}
          >
            <span className="mobile-nav-icon">
              <CgProfile size={20} />
            </span>
            <span>Profile</span>
            {activePage === "profile" && <span className="active-dot"></span>}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
