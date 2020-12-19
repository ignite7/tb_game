// Reatc
import React, { useContext } from "react";
import {useHistory} from "react-router-dom";

// Context
import AppContext from "../context/AppContext";

// Icons
import { AiOutlineRollback } from "react-icons/ai";

// Css
import "../styles/components/end.css";

function End() {
  const { state, setState } = useContext(AppContext);
  const history = useHistory()

  const handleOnClick = () => {
    setState({ ...state, level: "", goEnd: false, hasWon: false });
    history.push("/");
  };
  return (
    <div className="game-end">
      <h2 className="game-end__username">{state.username}</h2>
      <h3 className="game-end__regards">Congrats!</h3>
      <h4 className="game-end__difficult">Difficult: {state.level}</h4>
      <div className="game-end__back" onClick={handleOnClick}>
        <AiOutlineRollback className="game-end__back-icon" />
      </div>
    </div>
  );
}

export default End;
