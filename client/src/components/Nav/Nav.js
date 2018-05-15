import React from "react";
import './Nav.css';
import Auth from "../../utils/Auth";

const Nav = () => (
  <nav id="topNav">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="name">
          <h3>ACCIDENT TO ACTION</h3>
        </a>
          {Auth.isUserAuthenticated() ? (
           <div className="link">
           <a href="/logout" onClick={Auth.deauthenticateUser}>
           <h4>LOGOUT</h4>
           </a>
           </div>
        ) : (
          <div className="link">
          <a href="/login">
          <h4>LOGIN</h4>
          </a>
          </div>
        )}
  </nav>
);

export default Nav;
