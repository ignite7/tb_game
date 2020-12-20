// React
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// Context
import AppContext from "../context/AppContext";

// Icons
import { AiOutlineRollback } from "react-icons/ai";

// Components
import Heart from "./Heart";

// Css
import '../styles/components/winner.css'

function Winner() {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();

  const handleOnClick = (event) => {
    if (event.currentTarget.id === "end-back") {
      setState({
        ...state,
        level: "",
        goEnd: false,
        hasWon: false,
        showPlay: false,
      });
      history.push("/");
    }
  };
  return (
    <div className="end">
      <h2 className="end-username">{state.username}</h2>
      <h3 className="end-regards">Congrats!</h3>
      <h4 className="end-difficult">Difficult: {state.level}</h4>
      <div
        className="end-back"
        onClick={handleOnClick}
        id="end-back"
      >
        <AiOutlineRollback className="end-back-icon" />
      </div>
      <Heart />
    </div>
  );
}

export default Winner;
