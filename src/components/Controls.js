// React
import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

// Context
import AppContext from "../context/AppContext";

// Icon
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

// Css
import "../styles/components/controls.css";

function Controls() {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();

  const handleOnClick = (event) => {
    let controlStatus = document.getElementById("game-status");
    let gameBall = document.getElementById("game-ball");
    let ballX = document.getElementById("balloon-x");
    let ballY = document.getElementById("balloon-y");

    if (event.currentTarget.id === "pause") {
      gameBall.classList.add("pause");
      ballX.classList.add("pause");
      ballY.classList.add("pause");
      controlStatus.classList.add("active");
      setState({ ...state, controlStatus: "paused" });
    } else if (event.currentTarget.id === "play") {
      gameBall.classList.remove("pause");
      ballX.classList.remove("pause");
      ballY.classList.remove("pause");
      setState({ ...state, controlStatus: "running" });
      controlStatus.classList.remove("active");
    } else if (event.currentTarget.id === "backward" && !state.sleep) {
      setState({
        ...state,
        level: "",
        controlStatus: "",
        goGame: false,
        showPlay: false,
      });
      history.push("/");
    }
  };

  return (
    <Fragment>
      {state.sleep && (
        <div className="game-count active" id="game-count">
          <h3>Game starts in </h3>
        </div>
      )}
      <div className="game-status" id="game-status">
        <h3>Game Paused</h3>
      </div>
      <div className="game-controls">
        <div onClick={handleOnClick} className="game-controls__play" id="play">
          <FaPlay />
        </div>
        <div
          onClick={handleOnClick}
          className="game-controls__pause"
          id="pause"
        >
          <FaPause />
        </div>
        <div
          onClick={handleOnClick}
          className="game-controls__backward"
          id="backward"
        >
          <FaBackward />
        </div>
      </div>
    </Fragment>
  );
}

export default Controls;
