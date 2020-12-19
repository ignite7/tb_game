// React
import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

// Context
import AppContext from "../context/AppContext";

// Icons
import { GoPlay } from "react-icons/go";

// Css
import "../styles/components/play.css";

function Play() {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();

  const handleOnClick = () => {
    if (state.username === "") {
      setState({ ...state, error: "Insert a username please." });
    } else if (state.username.length > 25) {
      setState({ ...state, error: "Max length is 25 characters." });
    } else if (state.username.length < 4) {
      setState({ ...state, error: "Min length is 4 characters." });
    } else if (state.level === "") {
      setState({ ...state, error: "Select a level please." });
    } else {
      setState({ ...state, goGame: true, error: "" });
      sleep().then(() => {
        setState({
          ...state,
          controlStatus: "running",
          goGame: true,
          error: "",
        });
      });
      history.push("/game");
    }
  };

  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <Fragment>
      {state.showPlay && (
        <div className="start-play">
          <GoPlay
            onClick={handleOnClick}
            name="start"
            className="start-play__icon"
          />
        </div>
      )}
    </Fragment>
  );
}

export default Play;
