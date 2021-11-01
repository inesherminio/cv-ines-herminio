import React, { Component } from "react";
import portfolio from "../../data/portfolio.json";
import "./Portfolio.css";
import PortfolioElem from "./PortfolioElem/PortfolioElem";

class Porfolio extends Component {
  render() {
    return (
      <section className="portfolio-container" id="portfolio">
        <h2 className="area-title-white">Portfolio</h2>
        <div className="portfolio">
          {portfolio.map((eachProject) => {
            return <PortfolioElem eachProject={eachProject} />;
          })}
        </div>
      </section>
    );
  }
}

export default Porfolio;
