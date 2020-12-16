// React
import React, { Fragment, useContext } from "react";

// Context
import AppContext from "../context/AppContext";

// Css
import "../styles/components/levels.css";

function Levels() {
  const { state, setState } = useContext(AppContext);

  const handleOnClick = (event) => {
    setState({ ...state, level: event.target.value, showPlay: true });

    let btnEasy = document.getElementById("btn-level-easy");
    let btnNormal = document.getElementById("btn-level-normal");
    let btnHard = document.getElementById("btn-level-hard");

    if (event.target.value === "easy") {
      btnEasy.classList.toggle("clicked");
      btnNormal.classList.remove("clicked");
      btnHard.classList.remove("clicked");
    } else if (event.target.value === "normal") {
      btnEasy.classList.remove("clicked");
      btnNormal.classList.toggle("clicked");
      btnHard.classList.remove("clicked");
    } else if (event.target.value === "hard") {
      btnEasy.classList.remove("clicked");
      btnNormal.classList.remove("clicked");
      btnHard.classList.toggle("clicked");
    }
  };

  return (
    <Fragment>
      {state.showDifficultLevel && (
        <div className="start-level">
          <div className="start-level__mode">
            <button
              type="button"
              onClick={handleOnClick}
              className="start-level__btn"
              value="easy"
              id="btn-level-easy"
            >
              Easy
            </button>
          </div>
          <div className="start-level__mode">
            <button
              type="button"
              onClick={handleOnClick}
              className="start-level__btn"
              value="normal"
              id="btn-level-normal"
            >
              Normal
            </button>
          </div>
          <div className="start-level__mode">
            <button
              type="button"
              onClick={handleOnClick}
              className="start-level__btn"
              value="hard"
              id="btn-level-hard"
            >
              Hard
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default Levels;
