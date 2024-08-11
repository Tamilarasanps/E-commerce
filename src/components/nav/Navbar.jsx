import React from "react";
import "./Navbar.css";
import "../../App.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between py-4 px-1 bg-light shadow-sm">
        {/* Logo and Website Name */}
        <div className="d-flex align-items-center me-auto">
          <img
            src={logo}
            alt="Logo"
            className="me-2"
            style={{ width: "40px", height: "auto" }}
          />
          <p className="mb-0 fw-bold text-danger">WebSite</p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="d-flex gap-md-4 list-unstyled mb-0">
            <li className="mb-0">
              <Link to="/Home" className="text-dark text-decoration-none">
                Shop
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/mens" className="text-dark text-decoration-none">
                Men
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/womens" className="text-dark text-decoration-none">
                Women
              </Link>
            </li>
            <li className="mb-0">
              <Link to="/kids" className="text-dark text-decoration-none">
                Kid
              </Link>
            </li>
          </ul>
        </nav>

        {/* Cart Icon and Login Button */}
        <div className="d-flex align-items-center ms-auto">
          <Link to="/login">
            {" "}
            <button className="btn btn-primary me-5 ">Login</button>
          </Link>

          <div className="position-relative">
            <Link to="/cart">
              {" "}
              <img
                src={cart_icon}
                alt="Cart Icon"
                className="me-2"
                style={{ width: "30px", height: "auto" }}
              />
              <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
