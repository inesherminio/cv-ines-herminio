import React, { Component } from "react";
import "./HardSkillElem.css";
import Tooltip from "@mui/material/Tooltip";

class HardSkillElem extends Component {
  render() {
    const {
      eachSkill: { name, logo },
    } = this.props;
    return (
      <div key={name}>
        <Tooltip title={name} placement="top">
          <img src={logo} alt={name} className="each-skill" />
        </Tooltip>
      </div>
    );
  }
}

export default HardSkillElem;
