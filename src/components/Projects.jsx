import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";

const spotlightProjects = {
  "Smart Attendance System": {
    title: "smart attendance system",
    desc: "An IoT-based attendance management system using ESP32, Bluetooth Low Energy and Firebase Realtime Database.",
    techStack: "ESP32 • BLE • FIREBASE",
    link: "https://github.com/SamarthRavi/Smart-IoT-Attendance-System",
    image: "/assets/attendance.png",
  },

  OneRoof: {
    title: "oneroof",
    desc: "A modern real-estate aggregation platform built with React, TypeScript and Supabase.",
    techStack: "REACT • TYPESCRIPT • SUPABASE",
    link: "https://github.com/SamarthRavi/OneRooF-Real-Estate-Aggregator",
    image: "/assets/oneroof.png",
  },

  "Queue Monitoring": {
    title: "queue monitoring",
    desc: "A crowd monitoring dashboard with occupancy tracking and analytics.",
    techStack: "HTML • CSS • JAVASCRIPT",
    link: "https://github.com/SamarthRavi/Queue-Monitoring-System",
    image: "/assets/queue-monitoring.png",
  },
};

const projects = {
  "Smart Attendance System": {
    desc: "Bluetooth Low Energy based attendance system using ESP32 and Firebase Realtime Database.",
    techStack: "ESP32 • BLE • FIREBASE",
    link: "https://github.com/SamarthRavi/Smart-IoT-Attendance-System",
  },

  OneRoof: {
    desc: "Real-estate aggregation platform built with React, TypeScript and Supabase.",
    techStack: "REACT • TYPESCRIPT • SUPABASE",
    link: "https://github.com/SamarthRavi/OneRooF-Real-Estate-Aggregator",
  },

  "Queue Monitoring": {
    desc: "Crowd monitoring dashboard with occupancy tracking and analytics.",
    techStack: "HTML • CSS • JAVASCRIPT",
    link: "https://github.com/SamarthRavi/Queue-Monitoring-System",
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>

        <a
          href="https://github.com/samarthravi"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>

      {/* Desktop Carousel */}
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <a
                href={spotlightProjects[key].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="d-block w-100"
                  src={spotlightProjects[key].image}
                  alt={key}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Mobile Cards */}
      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div
              className="projects-card"
              onClick={() =>
                window.open(spotlightProjects[key].link, "_blank")
              }
              style={{ cursor: "pointer" }}
            >
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
              </div>

              <div className="card-title">
                {spotlightProjects[key].title}
              </div>

              <div className="spotlight-mobile-image">
                <img
                  src={spotlightProjects[key].image}
                  alt={key}
                />
              </div>

              <div className="card-desc">
                {spotlightProjects[key].desc}
              </div>

              <div className="card-tech">
                {spotlightProjects[key].techStack}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* Project Grid */}
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li
                className="projects-card"
                onClick={() =>
                  window.open(projects[key].link, "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                </div>

                <div className="card-title">{key}</div>

                <div className="card-desc">
                  {projects[key].desc}
                </div>

                <div className="card-tech">
                  {projects[key].techStack}
                </div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;