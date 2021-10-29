import React, { useEffect } from "react";
import "./ExperienceElemWide.css";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Aos from "aos";
import "aos/dist/aos.css";

function ExperienceElemWide({
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
        {type === "Academic" && (
          <TimelineOppositeContent
            sx={{ m: "auto 0", fontFamily: "monospace" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <div data-aos="zoom-in">{date}</div>
          </TimelineOppositeContent>
        )}
        {type === "Professional" && (
          <TimelineContent sx={{ py: "12px", px: 2, textAlign: "right" }}>
            <div
              data-aos="zoom-in"
              className="card-container card-container-left"
            >
              <div
                style={{ backgroundColor: color }}
                className="tag-container tag-container-left"
              >
                <p>{type}</p>
              </div>
              <div className="main-info-container main-info-container-left">
                <h6 className="main-info institution main-info-left institution-left">
                  {institution}
                </h6>
                <h5>
                  <span className="main-info experience main-info-left experience-left">
                    {name}
                  </span>
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
            </div>
          </TimelineContent>
        )}
        <TimelineSeparator>
          <TimelineConnector className="connector" />
          <TimelineDot className="timeline-dot"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        {type === "Academic" && (
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <div
              data-aos="zoom-in"
              className="card-container card-container-right"
            >
              <div
                style={{ backgroundColor: color }}
                className="tag-container tag-container-right"
              >
                <p>{type}</p>
              </div>
              <div className="main-info-container main-info-container-right">
                <h6 className="main-info institution main-info institution-right">
                  {institution}
                </h6>
                <h5>
                  <span className="main-info experience main-info-right experience-right">
                    {name}
                  </span>
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
            </div>
          </TimelineContent>
        )}
        {type === "Professional" && (
          <TimelineOppositeContent
            sx={{ m: "auto 0", textAlign: "left", fontFamily: "monospace" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <div data-aos="zoom-in">{date}</div>
          </TimelineOppositeContent>
        )}
      </TimelineItem>
    </div>
  );
}

export default ExperienceElemWide;
