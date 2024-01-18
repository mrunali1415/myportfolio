import React, { useContext } from "react";
import "./services.css";
import { ThemeContext } from "../../contexts/Context";
import {motion} from 'framer-motion'
import Card from "../Card/card";
import Resume from "./resume.pdf";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  // transition
  const transition={duration:1,type: "spring" };
  // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
          aliquid enim dicta sint! Laudantium dolores
          <br />
          reprehenderit dicta eligendi est molestiae consequatur eaque, aliquam
          adipisci, cupiditate suscipit maiores? Inventore, nulla.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* first card */}
        <motion.div 
        initial={{left:'25rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"figms,sketch,photoshop,adobe,adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div 
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html,Css,Javascript,MERN stack"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ex aliquid enim dicta sint! Laudantium dolore"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
