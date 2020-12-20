// Reatc
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Context
import AppContext from "../context/AppContext";

// Components
import Winner from "../components/Winner";

function End() {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!state.goEnd || !state.hasWon) {
      setState({ ...state, error: "You have not won yet!" });
      history.push("/");
    }
  });

  return <Winner />;
}

export default End;
