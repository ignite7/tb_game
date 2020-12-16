// React
import { useContext } from "react";

// Context
import AppContext from "../context/AppContext";

function useGame() {
  const { state, setState } = useContext(AppContext);

  const cleanStart = () => {
    setState({ ...state, showDifficultLevel: false, showPlay: false });
  };

  return { state, setState, cleanStart };
}

export default useGame;
