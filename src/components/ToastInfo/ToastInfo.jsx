import React from "react";
import "./ToastInfo.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ToastInfo() {
  return (
    <div>
      <div>
        <EmailIcon fontSize="small" className="toast-icon" />
        <a
          href="mailto:inesherminio@gmail.com?subject = We want you!"
          target="_blank"
          rel="noopener noreferrer"
          className="toast-text"
        >
          inesherminio@gmail.com
        </a>
      </div>
      <div>
        <PhoneAndroidIcon fontSize="small" className="toast-icon" />
        <p className="toast-text">+351 915 305 930</p>
      </div>
      <div>
        <LinkedInIcon fontSize="small" className="toast-icon" />
        <a
          href="https://linkedin.com/in/ines-herminio"
          target="_blank"
          rel="noopener noreferrer"
          className="toast-text"
        >
          linkedin.com/in/ines-herminio
        </a>
      </div>
    </div>
  );
}

export default ToastInfo;
