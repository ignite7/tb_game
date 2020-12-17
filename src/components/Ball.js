// React
import React, { useContext, useEffect } from "react";

// Context
import AppContext from "../context/AppContext";

// Css
import "../styles/components/ball.css";

function Ball() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    let gameBall = document.getElementById("game-ball");
    if (state.level === "hard") {
      gameBall.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-5rem)" },
          { transform: "translateY(10rem)" },
          { transform: "translateY(20rem)" },
        ],
        {
          duration: 600,
          delay: 2000,
          easing: "ease-in-out",
          direction: "alternate",
          iterations: Infinity,
        }
      );
    } else if (state.level === "normal") {
      gameBall.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-5rem)" },
          { transform: "translateY(10rem)" },
          { transform: "translateY(7rem)" },
          { transform: "translateY(4rem)" },
          { transform: "translateY(15rem)" },
        ],
        {
          duration: 1500,
          delay: 2000,
          easing: "ease-in-out",
          direction: "alternate",
          iterations: Infinity,
        }
      );
    } else {
      gameBall.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-5rem)" },
          { transform: "translateY(6rem)" },
          { transform: "translateY(15rem)" },
        ],
        {
          duration: 2000,
          delay: 2000,
          easing: "ease-in-out",
          direction: "alternate",
          iterations: Infinity,
        }
      );
    }
  });

  const handleOnClick = (event) => {
    setState({
      ...state,
      showDifficultLevel: false,
      showPlay: false,
      hasWon: true,
    });
  };

  return (
    <div className="game-ball" id="game-ball">
      <div className="game-ball__column-1" id="game-ball__column-1">
        <div className="column-1"></div>
      </div>
      <div className="game-ball__ball" id="game-ball__ball">
        <div className="ball" onClick={handleOnClick}></div>
      </div>
      <div className="game-ball__column-2">
        <div className="column-2"></div>
      </div>
    </div>
  );
}

export default Ball;
