// React
import React, { useState } from "react";

const AppContext = React.createContext({});

export function AppContextProvider({ children }) {
  const [state, setState] = useState({
    username: "",
    level: "",
    goGame: false,
    showDifficultLevel: false,
    showPlay: false,
    hasWon: false,
    error: "",
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
