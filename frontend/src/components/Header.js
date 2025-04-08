import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { clearUser } from "../features/auth/authSlice"; // Import clearUser action
import "../styles.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch
  const [menuVisible, setMenuVisible] = useState(false);
  const userRole = useSelector((state) => state.auth.role);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setMenuVisible(false); // Close the menu dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    dispatch(clearUser()); // Clear user state in Redux
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="site-header hbox vcbox">
      <div class="logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Sports News" class="img-logo" />
      </div>
      <div className="hbox endbox pr-10">
        <div className="menu-container">
          <button
            className="menu-button img-btn ficon ficon-menu"
            onClick={toggleMenu}
          ></button>
          <ul className={`menu-dropdown ${menuVisible ? "visible" : ""}`}>
            <li className="menu-item" onClick={() => handleMenuItemClick("/")}>
              Home
            </li>
            {userRole === "Admin" && (
              <>
                <li
                  className="menu-item"
                  onClick={() => handleMenuItemClick("/categories")}
                >
                  Categories
                </li>
                <li
                  className="menu-item"
                  onClick={() => handleMenuItemClick("/tags")}
                >
                  Tags
                </li>
                <li
                  className="menu-item"
                  onClick={() => handleMenuItemClick("/users")}
                >
                  Users
                </li>
                <li
                  className="menu-item"
                  onClick={() => handleMenuItemClick("/news")}
                >
                  News
                </li>
              </>
            )}
            <li className="menu-item" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
        <div
          className="user-icon img-btn ficon ficon-user1"
          onClick={() => navigate("/favorites")}
        ></div>
      </div>
    </header>
  );
};

export default Header;
