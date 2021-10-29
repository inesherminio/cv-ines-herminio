import React, { useEffect } from "react";
import "./ExperienceElemNarrow.css";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Aos from "aos";
import "aos/dist/aos.css";

function ExperienceElemNarrow({
  eachExperience: {
    tag: { type, color },
    institution,
    name,
    description,
    date,
    icon,
  },
}) {
  useEffect(() => {
    Aos.init({ duration: 750, startEvent: "load" });
  }, []);
  return (
    <div key={date}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector className="connector" />
          <TimelineDot className="timeline-dot"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div data-aos="zoom-in" className="card-container">
            <div style={{ backgroundColor: color }} className="tag-container">
              <p>{type}</p>
            </div>
            <div className="main-info-container">
              <h6 className="main-info institution">{institution}</h6>
              <h5>
                <span className="main-info experience">{name}</span>
              </h5>
            </div>
            <div>
              <ul>
                {description &&
                  description.map((eachTopic) => {
                    return <li className="description">{eachTopic}</li>;
                  })}
              </ul>
            </div>
            <div>
              <h6 className="date-info">{date}</h6>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </div>
  );
}

export default ExperienceElemNarrow;
