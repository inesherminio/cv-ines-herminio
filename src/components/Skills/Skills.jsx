import React, { Component } from "react";
import "./Skills.css";
import {
  api,
  axios,
  bootstrap,
  css,
  express,
  github,
  hbs,
  html,
  js,
  leaflet,
  materialUi,
  mongoDb,
  mongoose,
  netlify,
  node,
  postman,
  react,
  socketIo,
  sql,
  stripe,
  typescript
} from "../../assets/index";
import SkillElem from "./SkillElem/HardSkillElem";

const main = [
  { name: "HTML5", logo: html },
  { name: "CSS3", logo: css },
  { name: "JavaScript(ES6)", logo: js },
  { name: "Typescript", logo: typescript },
];
const jsFramework = [
  { name: "Node.js", logo: node },
  { name: "Express.js", logo: express },
  { name: "Handlebars", logo: hbs },
  { name: "Bootstrap", logo: bootstrap },
  { name: "Material UI", logo: materialUi },
];
const jsLibrary = [
  { name: "React", logo: react },
  { name: "Socket.io", logo: socketIo },
  { name: "Leaflet", logo: leaflet },
  { name: "Stripe", logo: stripe },
];
const database = [
  { name: "SQL", logo: sql },
  { name: "MongoDB", logo: mongoDb },
  { name: "Mongoose", logo: mongoose },
];
const backend = [
  { name: "Postman", logo: postman },
  { name: "Axios", logo: axios },
  { name: "REST API", logo: api },
];
const versionControl = [
  { name: "GitHub", logo: github },
  { name: "Netlify", logo: netlify },
];

class Skills extends Component {
  render() {
    return (
      <section className="skills-section" id="skills">
        <h2 className="area-title-color">Skills</h2>
        <div className="skill-types">
          <div className="skills-container">
            <h5 className="type-title">Main Languages</h5>
            <div className="skills-sub-container">
              {main.map((eachSkill) => {
                return <SkillElem eachSkill={eachSkill} />;
              })}
            </div>
          </div>
          <div className="skills-container">
            <h5 className="type-title">JS Frameworks</h5>
            <div className="skills-sub-container">
              {jsFramework.map((eachSkill) => {
                return <SkillElem eachSkill={eachSkill} />;
              })}
            </div>
          </div>
          <div className="skills-container">
            <h5 className="type-title">JS Libraries</h5>
            <div className="skills-sub-container">
              {jsLibrary.map((eachSkill) => {
                return <SkillElem eachSkill={eachSkill} />;
              })}
            </div>
          </div>
          <div className="skills-container">
            <h5 className="type-title">Backend</h5>
            <div className="skills-sub-container">
              {backend.map((eachSkill) => {
                return <SkillElem eachSkill={eachSkill} />;
              })}
            </div>
          </div>
          <div className="skills-container">
            <h5 className="type-title">Database</h5>
            <div className="skills-sub-container">
              {database.map((eachSkill) => {
                return <SkillElem eachSkill={eachSkill} />;
              })}
            </div>
          </div>
          <div className="skills-container">
            <h5 className="type-title">Version Control</h5>
            <div className="skills-sub-container">
              {versionControl.map((eachSkill) => {
                return <SkillElem eachSkill={eachSkill} />;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
