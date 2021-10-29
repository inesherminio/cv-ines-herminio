import React from "react";
import "./Experiences.css";
import experienceData from "../../data/experience.json";
import Timeline from "@mui/lab/Timeline";
import ExperienceElemWide from "./ExperienceElem/ExperienceElemWide";
import ExperienceElemNarrow from "./ExperienceElem/ExperienceElemNarrow";

function Experiences() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div>
      <div className="experiences-container" id="experience">
        <h2 className="area-title-white">Experience</h2>
        {width < 992 && (
          <Timeline position="right" className="timeline">
            {experienceData.map((eachExperience) => {
              return (
                <div>
                  <ExperienceElemNarrow eachExperience={eachExperience} />
                </div>
              );
            })}
          </Timeline>
        )}
        {width >= 992 && (
          <Timeline position="alternate" className="timeline">
            {experienceData.map((eachExperience) => {
              return (
                <div>
                  <ExperienceElemWide eachExperience={eachExperience} />
                </div>
              );
            })}
          </Timeline>
        )}
      </div>
    </div>
  );
}

export default Experiences;
