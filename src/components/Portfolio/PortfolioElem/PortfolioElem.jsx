import React, { Component } from "react";
import "./PortfolioElem.css";

class PortfolioElem extends Component {
  render() {
    const {
      eachProject: { title, description, technologies, app_url, code_url },
    } = this.props;
    return (
      <div className="portfolio-elem-container">
        <div className="portfolio-details">
          <h4 className="portfolio-title">{title}</h4>
          <p className="portfolio-description">{description}</p>
        </div>
        <div className="portfolio-links">
          <a
            href={app_url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            Check out {title}
          </a>
          <a
            href={code_url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            Check out the code
          </a>
        </div>
        <hr />
        <div className="portfolio-technologies">
          <p className="technologies-title">Tecnologies used</p>
          <div className="technologies-container">
            {technologies.map((eachTechnology) => {
              return <div className="technologies">{eachTechnology}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioElem;
