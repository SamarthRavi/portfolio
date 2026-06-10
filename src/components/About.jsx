import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am a <b>19-year-old B.Tech Computer Science (IoT)</b> student at
      <b> Jain University, Bengaluru</b>. I specialize in building IoT and
      embedded systems using ESP32, Bluetooth Low Energy (BLE), Firebase,
      MQTT, and cloud-connected architectures. My projects focus on solving
      real-world problems through automation, real-time monitoring, and
      intelligent connected devices.
    </p>
  );

  const two = (
    <p>
      Some of my notable projects include a Bluetooth-based Smart Attendance
      System and OneRoof, a modern real estate platform. Outside technology,
      I enjoy fitness, gaming, and continuously learning new skills in software
      and hardware development. My goal is to become a highly skilled IoT and 
      Embedded Systems Engineer and build products that create real impact.
    </p>
  );

  const techStack = [
    "ESP32",
    "Bluetooth Low Energy (BLE)",
    "Firebase",
    "MQTT",
    "Python",
    "JavaScript",
    "React.js",
    "Supabase",
    "Embedded C",
    "Git & GitHub",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>

        <div className="about-content">
          <div className="about-description">
            {one}

            {"Here are some technologies I have been working with:"}

            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>

            {two}
          </div>

          <div className="about-image">
            <img alt="Samarth Ravi" src={"/assets/me.png"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;