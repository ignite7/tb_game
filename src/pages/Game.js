//React
import React, { useContext } from "react";

// Context
import AppContext from "../context/AppContext";

function Game() {
  const { state, setState } = useContext(AppContext);

  return <h1>Game, {state.username}</h1>;
}

export default Game;
