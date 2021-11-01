import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import CV from "../../assets/InesHerminio_en_nov21.pdf";
import Toast from "react-bootstrap/Toast";
import ToastInfo from "../ToastInfo/ToastInfo";

function Header() {
  const [show, setShow] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Inês Hermínio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end" 
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Inês Hermínio
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#about-me" >
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item" style={{marginBottom: "10px"}}>
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                {width > 990 && (
                  <li className="nav-item">
                    <button
                      type="button"
                      onClick={() => setShow(true)}
                      className="btn btn-outline-success me-2 btn-talk"
                    >
                      Let's talk
                    </button>
                  </li>
                )}
                <li className="nav-item button-nav">
                  <button
                    type="button"
                    className="btn btn-outline-success me-2 btn-cv"
                  >
                    <a href={CV} className="download-link" download>
                      Download my CV
                    </a>
                  </button>
                </li>
                {width <= 990 && (
                  <li className="nav-item toast-info-nav-item">
                    <ToastInfo />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        className="d-inline-block m-1 toast"
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Contact me</strong>
        </Toast.Header>
        <Toast.Body>
          <ToastInfo />
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Header;
