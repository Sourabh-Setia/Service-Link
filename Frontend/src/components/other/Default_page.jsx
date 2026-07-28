import React from "react";
import { Link } from "react-router-dom";
import Name_of_the_app from "./Name_of_the_app";
import "./Default_page.css";

const Default_page = () => {
  return (
    <div className="container text-center position-relative">
      {/* App Name Section */}
      <div className="mb-4">
        <Name_of_the_app  />
      </div>

      {/* Message Section */}
      <div>
        <h2 className="fst-italic">Oops! You’ve reached the wrong page.</h2>
        <h3>
          <Link to="/Login" className="text-decoration-none">
            Click here to login
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Default_page;
