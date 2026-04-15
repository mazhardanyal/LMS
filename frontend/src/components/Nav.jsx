import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoPerson } from "react-icons/io5";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      
      {/* LEFT - LOGO */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* RIGHT - MENU */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        
        {/* USER SECTION */}
        <div className="user-section">
          <IoPerson className="icon" />
          <span>Dashboard</span>
        </div>

        <button className="logout">Logout</button>
      </div>

      {/* MOBILE MENU */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
};

export default Nav;