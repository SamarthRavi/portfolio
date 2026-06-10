import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <AsciiPortrait />
      </div>

      <div className="intro-block">
        <div className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["samarth"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {" here."}
          <span className="intro-cursor">|</span>
        </div>

        <FadeInSection>
          <div className="intro-desc">
            19-year-old IoT Developer and Embedded Systems Builder from
            Bengaluru, India. I design smart systems using ESP32, BLE,
            Firebase, MQTT and real-time cloud technologies. Passionate
            about building connected devices, automation solutions, and
            turning ideas into real-world products.
          </div>

          <a
            href="mailto:samarthravi1225@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;