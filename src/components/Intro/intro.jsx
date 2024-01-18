import React, { useContext } from "react";
import "./intro.css";
import FloatingDiv from "../FloatingDiv/floating";
import { ThemeContext } from "../../contexts/Context";
import { motion } from "framer-motion";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Crown from "../../img/crown.png";
//import girl from '../..//img/girl.png';
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Welcome to my site!! <br></br>I Am </span>
          <span>Mrunali Chougule</span>
          {/* <a href="https://mrunalichougule-portfolio/">Visit my portfolio</a> */}
          <span>
            Tech Enthusiast Complete B.E in Information & Technology with 8.2
            CGPA and always interested to learn about new technologies. I have
            made projects in the domains of Web Development and ML. Eager to
            learn more about real-world projects and gain experience in the real
            world.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/mrunali1415" className="icon-link">
            <img src={Github} alt="Github" className="icon-img" />
          </a>
          <a
            href="https://www.linkedin.com/in/mrunali-chougule-974880219"
            className="icon-link"
          >
            <img src={Linkedin} alt="Linkedin" className="icon-img" v />
          </a>
          <a
            href="https://www.instagram.com/mysteryy14__"
            className="icon-link"
          >
            <img src={Instagram} alt="Instagram" className="icon-img" />
          </a>
        </div>
      </div>
       {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
         {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
         {/* animation */}
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
