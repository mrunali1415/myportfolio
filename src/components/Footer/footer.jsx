import React from "react";
import "./footer.css";
import wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

function Footer() {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mrunalichougule@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Linkdin color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
