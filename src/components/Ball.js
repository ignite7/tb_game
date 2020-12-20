// React
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Context
import AppContext from "../context/AppContext";

// Css
import "../styles/components/ball.css";

function Ball() {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    const column = document.getElementById("game-ball");
    const balloonX = document.getElementById("balloon-x");
    const balloonY = document.getElementById("balloon-y");

    if (state.level === "easy") {
      column.style.animationDuration = "3s";
      balloonX.style.animationDuration = "10s";
      balloonY.style.animationDuration = "0.5s";
    } else if (state.level === "normal") {
      column.style.animationDuration = "1.5s";
      balloonX.style.animationDuration = "7s";
      balloonY.style.animationDuration = "0.4s";
    } else if (state.level === "hard") {
      column.style.animationDuration = "0.8s";
      balloonX.style.animationDuration = "5s";
      balloonY.style.animationDuration = "0.3s";
    }
    const sleep = setTimeout(() => {
      setState({
        ...state,
        sleep: false,
        controlStatus: "running",
      });
    }, 3000);
    return () => clearTimeout(sleep);
    // eslint-disable-next-line
  }, []);

  const handleOnClick = (event) => {
    if (event.target.id === "balloon-y" && state.controlStatus === "running") {
      setState({
        ...state,
        controlStatus: "",
        changeTitle: false,
        goGame: false,
        goEnd: true,
        hasWon: true,
      });
      history.push("/end");
    }
  };

  return (
    <div className="game-ball" id="game-ball">
      <div className="game-ball__column" id="column"></div>
      <div className="game-ball__container">
        <div className="game-ball__balloon-x" id="balloon-x">
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
