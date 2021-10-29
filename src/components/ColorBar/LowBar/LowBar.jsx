import React, { Component } from "react";
import "./LowBar.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CV from "../../../assets/InesHerminio_en_oct21.pdf";

class LowBar extends Component {
  render() {
    return (
      <div className="low-bar">
        <div className="low-bar-section">
          <h5>
            <span className="section-title">Contact me</span>
          </h5>
          <div>
            <EmailIcon
              fontSize="small"
              sx={{ color: "#212529", marginRight: "5px" }}
            />
            <a
              href="mailto:inesherminio@gmail.com?subject = We want you!"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts-info"
            >
              inesherminio@gmail.com
            </a>
          </div>
          <div className="contacts-info">
            <PhoneAndroidIcon
              fontSize="small"
              sx={{ color: "#212529", marginRight: "5px" }}
            />
            +351 915 305 930
          </div>
          <div>
            <LinkedInIcon
              fontSize="small"
              sx={{ color: "#212529", marginRight: "5px" }}
            />
            <a
              href="https://linkedin.com/in/ines-herminio"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts-info"
            >
              linkedin.com/in/ines-herminio
            </a>
          </div>
        </div>
        <div className="low-bar-section">
          <a href={CV} download className="download">
            <h5>
              <span className="section-title">Download my CV</span>
            </h5>
          </a>
        </div>
        <div className="low-bar-section source">
          <a
            href="https://github.com/inesherminio/cv-ines-herminio"
            target="_blank"
            rel="noopener noreferrer"
            className="source-code"
          >
            <p className="source-code-text">Website source code</p>
          </a>
        </div>
      </div>
    );
  }
}

export default LowBar;
