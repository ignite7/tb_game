// React
import React, { Fragment, useContext } from "react";

// Context
import AppContext from "../context/AppContext";

// Css
import "../styles/components/header.css";

function Header() {
  const { state } = useContext(AppContext);

  return (
    <Fragment>
      {!state.goGame || state.goEnd ? (
        <h1>The Ball Game</h1>
      ) : (
        <h1>Touch The Ball</h1>
      )}
    </Fragment>
  );
}

export default Header;
