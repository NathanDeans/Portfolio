import "./App.css";
import React, { useState } from "react";
import { Link } from "react-scroll";

function Intro() {
  return (
    <div className="app">
      <div className="content">
        <h1>Hello, I'm Nathan</h1>
        <h1>I am a full stack web developer</h1>
        <button className="homeBtn">
          <Link to="bio" spy={true} smooth={true} duration={500} offset={-150}>
            Learn More
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Intro;
