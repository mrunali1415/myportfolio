import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/toggle";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left side */}
      <div className="n-left">
        <div className="n-name">MRUNALI</div>
        <Toggle />
      </div>
      {/* right side */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="Home" smooth={true} spy={true} activeClass="activeClass">
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" smooth={true} spy={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="Experience" smooth={true} spy={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="Projects" smooth={true} spy={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="Testimonials" smooth={true} spy={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
