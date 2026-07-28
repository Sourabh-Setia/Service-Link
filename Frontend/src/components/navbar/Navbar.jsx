import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

const Navbar = ({ setActivePage }) => {
  const [activeBtn, setActiveBtn] = useState("findServices");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page) => {
    setActiveBtn(page);
    setActivePage(page);
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container bg-body-secondary p-3 rounded-bottom-5">
      {/* Top Row (Desktop + Mobile header) */}
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Mobile Left Section: Hamburger + Active Page Name */}
        <div className="d-md-none d-flex align-items-center gap-2">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <RxHamburgerMenu size={37} />
          </div>

          <div className="mobile-active-page">
            {activeBtn === "findServices" && "Find Services"}
            {activeBtn === "chats" && "Chats"}
            {activeBtn === "serviceHistory" && "Service History"}
            {activeBtn === "transaction" && "Transaction"}
            {activeBtn === "profile" && "Profile"}
          </div>
        </div>

        {/* Desktop Profile Icon */}
        <div
          className={`d-none d-md-flex align-items-center nav-btn ms-auto ${
            activeBtn === "profile" ? "active" : ""
          }`}
          onClick={() => handleClick("profile")}
        >
          <CgProfile size={40} />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="row pt-4 d-none d-md-flex">
        <div
          className={`col text-center word nav-btn ${
            activeBtn === "findServices" ? "active" : ""
          }`}
          onClick={() => handleClick("findServices")}
        >
          Find Services
        </div>

        <div
          className={`col text-center word nav-btn ${
            activeBtn === "chats" ? "active" : ""
          }`}
          onClick={() => handleClick("chats")}
        >
          Chats
        </div>

        <div
          className={`col text-center word nav-btn ${
            activeBtn === "serviceHistory" ? "active" : ""
          }`}
          onClick={() => handleClick("serviceHistory")}
        >
          Service History
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu d-md-none mt-3">
          <div
            className={`mobile-item nav-btn ${
              activeBtn === "findServices" ? "active" : ""
            }`}
            onClick={() => handleClick("findServices")}
          >
            Find Services
          </div>

          <div
            className={`mobile-item nav-btn ${
              activeBtn === "chats" ? "active" : ""
            }`}
            onClick={() => handleClick("chats")}
          >
            Chats
          </div>

          <div
            className={`mobile-item nav-btn ${
              activeBtn === "serviceHistory" ? "active" : ""
            }`}
            onClick={() => handleClick("serviceHistory")}
          >
            Service History
          </div>

          <div
            className={`mobile-item nav-btn ${
              activeBtn === "profile" ? "active" : ""
            }`}
            onClick={() => handleClick("profile")}
          >
            Profile
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
