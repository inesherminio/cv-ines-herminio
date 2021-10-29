import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Inês Hermínio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="#about-me">
                About me
              </a>
              <a class="nav-link" href="#portfolio">
                Portfolio
              </a>
              <a class="nav-link" href="#skills">
                Skills
              </a>
              <a class="nav-link" href="#experience">
                Experience
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
