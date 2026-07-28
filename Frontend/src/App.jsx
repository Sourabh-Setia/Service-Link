
import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css"
import Dashboard from "./components/Dashboard";
import Login_page from "./components/login-signup-form/Login_page";
import Default_page from "./components/other/Default_page";
import Signup from "./components/login-signup-form/Signup";
import Chats from "./components/navbar-menu/Chats";







// Temporary placeholder components
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function App() {
  return (


      <Routes>
        <Route path="/" element={<Navigate to = '/login' />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login_page />} />
        <Route path = "/home" element= {<Home/>} />
        <Route path="*" element={<Default_page/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>} />
        {/* <Route path = "/dashboard/Chats" element = {<Chats/>} /> */}
      </Routes>

      
  
  );
}

export default App;