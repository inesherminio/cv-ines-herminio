import React, { Component } from "react";
import "./HardSkillElem.css";
import Tooltip from "@mui/material/Tooltip";

class HardSkillElem extends Component {
  state = {
    showTooltip: false,
  };
  handleShowTooltip = () => {
    this.setState({ showTooltip: !this.state.showTooltip });
  };
  render() {
    const {
      eachSkill: { name, logo },
    } = this.props;
    const { showTooltip } = this.state;
    return (
      <div key={name}>
        <Tooltip
          title={name}
          placement="top"
          open={showTooltip}
          onOpen={() => this.handleShowTooltip()}
          onClose={() => this.handleShowTooltip()}
        >
          <img
            src={logo}
            alt={name}
            className="each-skill"
            onClick={() => this.handleShowTooltip()}
          />
        </Tooltip>
      </div>
    );
  }
}

export default HardSkillElem;
