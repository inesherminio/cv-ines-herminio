import React, { Component } from "react";
import "./Portfolio.css";
import PortfolioElem from "./PortfolioElem/PortfolioElem";

const portfolio = [
  {
    title: "La Tomatina",
    description:
      "A game inspired by the Tomatina Festival, in Spain, where the player must hit the others with tomatoes and not get hit. La Tomatina is a full front-end project, built as the module 1 project for Ironhack's Web Development Bootcamp.",
    technologies: ["JavaScript", "HTML", "CSS", "Canvas"],
    app_url: "https://inesherminio.github.io/la-tomatina/",
    code_url: "https://github.com/inesherminio/la-tomatina",
  },
  {
    title: "FilMate",
    description:
      "A social media platform for people who like watching movies. FilMate is a full stack project, more focused on the back-end architecture, built as the module 2 project for Ironhack's Web Development Bootcamp.",
    technologies: [
      "MongoDB",
      "Mongoose",
      "Express.js",
      "Node.js",
      "Handlebars",
      "Axios",
      "Socket.io",
    ],
    app_url: "https://filmate-app.herokuapp.com/",
    code_url: "https://github.com/inesherminio/FilMate-app",
  },
];

class Porfolio extends Component {
  render() {
    return (
      <div className="portfolio-container" id="portfolio">
        <h2 className="area-title-white">Portfolio</h2>
        <div className="portfolio">
          {portfolio.map((eachProject) => {
            return <PortfolioElem eachProject={eachProject} />;
          })}
        </div>
      </div>
    );
  }
}

export default Porfolio;
