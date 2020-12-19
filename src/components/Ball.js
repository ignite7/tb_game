// React
import React, { useContext, useEffect } from "react";

// Context
import AppContext from "../context/AppContext";

// Css
import "../styles/components/ball.css";

function Ball() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    const gameBall = document.getElementById("game-ball");

    if (state.level === "easy") {
      gameBall.style.animationDuration = "2s";
    } else if (state.level === "normal") {
      gameBall.style.animationDuration = "1.5s";
    } else if (state.level === "hard") {
      gameBall.style.animationDuration = "0.8s";
    }
  });

  const handleOnClick = (event) => {
    if (
      (event.target.id === "balloon-x" && state.controlStatus === "running") ||
      event.target.id === "balloon-y" && state.controlStatus === "running"
    ) {
      setState({
        ...state,
        level: "",
        controlStatus: "",
        showDifficultLevel: false,
        showPlay: false,
        goGame: false,
        goEnd: true,
        hasWon: true,
      });
    }
  };

  return (
    <div className="game-ball" id="game-ball">
      <div className="game-ball__column" id="column"></div>
      <div className="game-ball__container">
        <div
          onClick={handleOnClick}
          className="game-ball__balloon-x"
          id="balloon-x"
        >
          <div
            onClick={handleOnClick}
            className="game-ball__balloon-y"
            id="balloon-y"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Ball;
