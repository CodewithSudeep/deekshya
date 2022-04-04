import React from "react";
import "./styles/style.css";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div className="topbar__container__socialLinks">
        <ul>
          <li>Find us here:</li>
          <li>
            <a
              href="https://theboringschool.org"
              target="_blank"
              rel="noreferrer"
            >
              Fb
            </a>
          </li>
          <li>
            <a
              href="https://theboringschool.org"
              target="_blank"
              rel="noreferrer"
            >
              Ins
            </a>
          </li>
          <li>
            <a
              href="https://theboringschool.org"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
          </li>
        </ul>
      </div>

      <div className="topbar__container__contactInfo">
        <p>Have a question? Call us:</p>
        <p className="contact">
          <i className="ri-phone-line"></i>
          <span>+9779849092326</span>
        </p>
      </div>
    </div>
  );
}
