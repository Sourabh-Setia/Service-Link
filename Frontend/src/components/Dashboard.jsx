import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Chats from "./navbar-menu/Chats";
import Service_history from "./navbar-menu/Service_history";
// import Transaction from "./navbar-menu/Transaction";
import Profile from "./navbar-menu/Profile";
import Findservice from "./navbar-menu/Findservice";
import { Routes, Route } from "react-router-dom";





const Dashboard = () => {
  const [activePage, setActivePage] = useState("findServices");

  const renderPage = () => {
    switch (activePage) {
      case "findServices":
        return <Findservice />;
      case "chats":
        return <Chats />;
      case "serviceHistory":
        return <Service_history />;
      case "transaction":
        return <Transaction />;
        case "profile":
        return <Profile />;
      default:
        return <Findservice />;
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className="position-fixed w-100" style={{ top: 0, left: 0, zIndex: 10 }}>
        <Navbar setActivePage={setActivePage} />
      </div>

      {/* Page content below */}
      <div className="container pt-1" style={{ marginTop: "150px" }}>
        <div className="row">
        {renderPage()}
        </div>
       
      </div>
    </>
  );
};


export default Dashboard;