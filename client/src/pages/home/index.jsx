import React from "react";
import "./styles/style.css";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__container__landing">
        <img
          className="topLeftImage"
          src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div className="centerImage"></div>
        <img
          className="bottomRightImage"
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />

        <div className="landing__content">
          <h1 className="landing__content__title">Lorem Ipsum,</h1>
          <p className="landing__content__subtitle">
            An Initiation
          </p>
          <h2 className="landing__content__footertitle">
            From The Boring School.
          </h2>
        </div>
      </div>
    </div>
  );
}
