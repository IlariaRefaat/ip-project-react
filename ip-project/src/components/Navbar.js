import React from "react";
import "./Navbar.css";
import {
  FaHome,
  FaSearch,
  FaPencilAlt,
  FaUserAlt,
  FaRegFile,
  FaGlobe,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h2 className="logo">Our Logo</h2>
        <div className="menu-bar">
          <a href="/">
            <h3 className="home-page">
              <FaHome />
            </h3>
          </a>

          <a href="/blogPage">
            {/* <i className="uil uil-pen blog-page"></i> */}
            <h3 className="blog-page">
              <FaPencilAlt />
            </h3>
          </a>

          <a href="/aboutPage">
            <h3 className="about-page">
              <FaRegFile />
            </h3>
          </a>
          <a href="/searchPage">
            <h3 className="search-page">
              <FaSearch />
            </h3>
          </a>
        </div>

        <div className="login-registration">
          <a href="/login">
            {" "}
            <label className="btn btn-secondary" for="login-registration">
              Login/Register
            </label>
          </a>
        </div>
        <div className="profile-picture">
          <a href="/profile">
            <h3 className="user-page">
              <FaUserAlt />
            </h3>
          </a>
        </div>
        <div className="language">
          <h3 className="globe-icon">
            <FaGlobe />
          </h3>
        </div>
        <div className="add-question">
          <label className="btn btn-primary" for="add-question">
            Add question
          </label>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
