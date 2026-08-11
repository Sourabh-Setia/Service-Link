import React from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Chats from "./navbar-menu/Chats";
import Service_history from "./navbar-menu/Service_history";
import Profile from "./navbar-menu/Profile";
import Findservice from "./navbar-menu/Findservice";
import Yourbooking from "./navbar-menu/Yourbooking";

const pageConfig = {
  findservice: {
    pageId: "findservice",
    component: <Findservice />,
  },
  chats: {
    pageId: "chats",
    component: <Chats />,
  },
  bookings: {
    pageId: "bookings",
    component: <Yourbooking />,
  },
  "service-history": {
    pageId: "service-history",
    component: <Service_history />,
  },
  profile: {
    pageId: "profile",
    component: <Profile />,
  },
};

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentSlug = location.pathname.split("/")[2] || "findservice";
  const activePage = pageConfig[currentSlug]?.pageId || "findservice";

  const handleNavigate = (page) => {
    navigate(`/dashboard/${page}`);
  };

  return (
    <>
      <div className="position-fixed w-100" style={{ top: 0, left: 0, zIndex: 10 }}>
        <Navbar activePage={activePage} onNavigate={handleNavigate} />
      </div>

      <div className="container pt-1" style={{ marginTop: "150px" }}>
        <div className="row">
          <Routes>
            <Route index element={<Navigate to="findservice" replace />} />
            <Route path="findservice" element={pageConfig.findservice.component} />
            <Route path="chats" element={pageConfig.chats.component} />
            <Route path="bookings" element={pageConfig.bookings.component} />
            <Route
              path="service-history"
              element={pageConfig["service-history"].component}
            />
            <Route path="profile" element={pageConfig.profile.component} />
            <Route path="*" element={<Navigate to="findservice" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
