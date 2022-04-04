import React from "react";
import { Link } from "react-router-dom";

import "./styles/style.css";

export default function Navbar() {
  return (
    <div className="navbar__container">
      {/**
       * @section => nav logo
       */}
      <div className="navbar__container__left">
        <h3>Deekshya</h3>
      </div>

      {/**
       * @section => nav links
       */}
      <div className="navbar__container__center">
        <ul className="navbar__container__navlinks">
          <li>
            <Link  className="active" to="/">Stories</Link>
          </li>
          <li>
            <Link to="/">Fundraising</Link>
          </li>
          <li>
            <Link to="/">Events</Link>
          </li>
        </ul>
      </div>

      {/**
       * @section => authentication
       */}
      <div className="navbar__container__right">
        <ul className="navbar__container__auth">
          <li>
            <Link to="/"><i className="ri-shield-keyhole-line"></i>Log In</Link>
          </li>
          <li>
            <Link className="auth__signup" to="/">Be the part of Initiation <i className="ri-arrow-right-line"></i></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
