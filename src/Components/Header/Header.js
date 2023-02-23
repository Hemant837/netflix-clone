import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Navbar">
          <img className="Logo" src="Logo.png" />
          <div>
            <button className="Language-switcher">
              English <img src="down-icon.png" />
            </button>
            <button className="Signin">Sign In</button>
          </div>
        </div>
        <div className="Header-container">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="Email-signup">
            <input type="email" placeholder="Email address" required />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
