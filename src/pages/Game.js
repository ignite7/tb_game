// React
import React, { Fragment, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Context
import AppContext from "../context/AppContext";

// Components
import Ball from "../components/Ball";
import Controls from "../components/Controls";

function Game() {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!state.username || state.error) {
      setState({
        ...state,
        error: "Complete the form before to play.",
      });
      history.push("/");
    }
  });

  return (
    <Fragment>
      {!state.goEnd && !state.hasWon ? (
        <Fragment>
          <Ball />
          <Controls />
        </Fragment>
      ) : (
        <h1>You have won!</h1>
      )}
    </Fragment>
  );
}

export default Game;
