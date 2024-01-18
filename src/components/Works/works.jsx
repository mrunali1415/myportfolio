import React, { useContext } from "react";
import "./works.css";
import { ThemeContext } from "../../contexts/Context";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import FaceBook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
  // transition
  const transition={duration:1,type: "spring" };
  // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className="works" id="works">
       {/* left side */}
       <div className="w-left">
      < div className="awesome">
        {/* dark Mode */}
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
          aliquid enim dicta sint!
          <br />
          reprehenderit dicta eligendi est molestiae consequatur Laudantium
          dolores
          <br /> eaque, aliquam adipisci, cupiditate suscipit maiores?
          Inventore, nulla.
          <br />
          Fugit ex aliquid enim dicta sint! Laudantium dolores
        </span>
        
        <button className="button s-button">Hire Me</button>
        
        <div className="blur s-blurl" style={{ background: "#abf1ff94" }}></div>
      </div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div 
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={transition}
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={FaceBook} alt="" />
          </div>
        </motion.div>
        {/* background Circle*/}
        <div className="w-background blueCircle"></div>
        <div className="w-background yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
