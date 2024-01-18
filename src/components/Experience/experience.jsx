import React, { useContext } from "react";
import "./experience.css";
import { ThemeContext } from "../../contexts/Context";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          2+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          3+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          0
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Companiess</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
