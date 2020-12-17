//React
import React, { Fragment, useContext } from "react";

// Context
import AppContext from "../context/AppContext";

// Components
import Ball from "../components/Ball";
import Controls from "../components/Controls";

function Game() {
  const { state, setState } = useContext(AppContext);

  return (
    <Fragment>
      <Ball />
      <Controls />
    </Fragment>
  );
}

export default Game;
