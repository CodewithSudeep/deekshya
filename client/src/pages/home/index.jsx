import React from "react";
import "./styles/style.css";

import Lex from "../../assets/lex.webp";

export default function Home() {
  return (
    <div className="home__container">
      {/**
       * @section => landing container
       */}
      <div className="home__landing">
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <h1>Help People, Stand Alognside Them!</h1>
        </div>
        <div className="center">
          <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div className="right">
          <p>You can help; share your support, donate, it all matters!</p>
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2183&q=80"
            alt=""
          />
        </div>
      </div>

      {
        /**
         * @section => banner container
         */
        <div className="home__container__banner">
          <div className="home__container__banner__image">
            <img src={Lex} alt="Domsan Lex" />
          </div>
          <div className="home__container__banner__content">
            <h1>Message - Initiator. 🚀</h1>
            <span className="initiator">Domsan Lex, The Boring School</span>
            <div className="divider"></div>
            <div className="messages">
              <div className="message__item">
                <div className="message__content">
                  <div className="title">
                    <h3>The reason why I started?</h3>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere rerum exercitationem incidunt sapiente tempora
                    delectus natus deserunt quibusdam.
                  </div>
                </div>
              </div>
              <div className="message__item">
                <div className="message__content">
                  <div className="title">
                    <h3>How all of it works?</h3>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere rerum exercitationem incidunt sapiente tempora
                    delectus natus deserunt quibusdam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
