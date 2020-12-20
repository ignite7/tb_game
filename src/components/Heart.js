// React
import React, { Fragment } from "react";

// Css
import "../styles/components/heart.css";

function Heart() {
  const renderHeart = () => {
    let hearts = new Array(100).fill({});
    return hearts.map((_, index) => {
      const style = {
        left: Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + "px",
        animationDelay: Math.floor(Math.random() * (10000 - 0)) + 0 + "ms",
      };
      return <div className="game-end__heart" key={index} style={style}></div>;
    });
  };

  return <Fragment>{renderHeart()}</Fragment>;
}

export default Heart;
