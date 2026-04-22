import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";

const Nav = () => {
  const [open, setOpen] = useState(false);


  const { userData } = useSelector((state) => state.user)
 


  return (
    <nav className="nav">
      
      {/* LEFT - LOGO */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* RIGHT - MENU */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        {userData && <div className="profile-avatar">{userData.name.slice(0, 1).toUpperCase()}</div>}
        {/* USER SECTION */}
      {userData?.role?.trim().toLowerCase() === "educator" && (
  <div className="user-section">
    <span>Dashboard</span>
  </div>
)}

        {! userData ?<button className="logout">Login</button>:
        <button className="logout">Logout</button>}
      </div>

      {/* MOBILE MENU */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
};

export default Nav;