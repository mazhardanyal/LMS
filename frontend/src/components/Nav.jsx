import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import logo from "../assets/logo.png";
import { setUserData } from "../redux/userSlice";
import { server } from "../config";
import { toast } from "react-toastify";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const ref = useRef(null);

  const userData = useSelector((state) => state.user.userData);

  const handleLogout = async () => {
    try {
      await axios.post(
        server + "/api/auth/logout",
        {},
        { withCredentials: true }
      );

      dispatch(setUserData(null));
      toast.success("Logged out");
      navigate("/login");
    } catch {
      toast.error("Logout failed");
    }
  };

  const go = (path) => {
    navigate(path);
    setSidebarOpen(false);
    setProfileOpen(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav-glass">

        <div className="logo" onClick={() => go("/")}>
          <img src={logo} alt="logo" />
        </div>

        {/* RIGHT */}
        <div className="right-zone">

          {/* DESKTOP */}
          <div className="desktop-actions">

            {userData ? (
              <>
                {userData.role?.toLowerCase() === "educator" && (
                  <div
                    className={`pill ${
                      location.pathname === "/dashboard" ? "active" : ""
                    }`}
                    onClick={() => go("/dashboard")}
                  >
                    Dashboard
                  </div>
                )}

                <div className="pill danger" onClick={handleLogout}>
                  Logout
                </div>

                <div
                  className="avatar"
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  {userData.name.charAt(0).toUpperCase()}
                </div>
              </>
            ) : (
              <button className="btn-login" onClick={() => go("/login")}>
                Login
              </button>
            )}

          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setSidebarOpen(true)}>
            ☰
          </div>

        </div>

        {/* PROFILE CARD */}
        <div
          ref={ref}
          className={`dropdown ${profileOpen ? "show" : ""}`}
        >
          <div onClick={() => go("/profile")} onClick={()=>navigate("/profile")}> My Profile</div>
          <div onClick={() => go("/my-courses")}> My Courses</div>
        </div>

      </nav>

      {/* BACKDROP */}
      {sidebarOpen && (
        <div
          className="backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="side-item" onClick={() => go("/")}>
          Home
        </div>

        {userData && (
          <>
            <div className="side-item" onClick={() => go("/profile")}>
              Profile
            </div>

            <div className="side-item" onClick={() => go("/my-courses")}>
              My Courses
            </div>

            {userData.role?.toLowerCase() === "educator" && (
              <div className="side-item" onClick={() => go("/dashboard")}>
                Dashboard
              </div>
            )}

            <div className="side-item danger" onClick={handleLogout}>
              Logout
            </div>
          </>
        )}

        {!userData && (
          <div className="side-item" onClick={() => go("/login")}>
            Login
          </div>
        )}

      </div>
    </>
  );
};

export default Nav;