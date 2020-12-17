// React
import React from "react";

// Icon
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

// Css
import "../styles/components/controls.css";

function Controls() {
  const handleOnClick = (event) => {
    if (event.target.id === "paused") {
      let ball = document.getElementById("game-ball__ball");
      ball.classList.add("paused");
    }
  };
  return (
    <div className="game-controls">
      <FaPlay onClick={handleOnClick} id="play" />
      <FaPause onClick={handleOnClick} id="paused" />
      <FaBackward onClick={handleOnClick} id="backward" />
    </div>
  );
}

export default Controls;
