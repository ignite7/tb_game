// React
import React, { Fragment, useContext } from "react";

// Context
import AppContext from "../context/AppContext";

// Components
import Levels from "../components/Levels";
import Form from "../components/Form";
import Play from "../components/Play";

// Css Transitions
import { CSSTransition } from "react-transition-group";

// Css
import "../styles/pages/start.css";

function Start() {
  const { state } = useContext(AppContext);

  return (
    <Fragment>
      <Form />
      <CSSTransition
        in={state.showDifficultLevel}
        timeout={500}
        classNames="fade"
      >
        <Levels />
      </CSSTransition>
      <CSSTransition
        in={state.showPlay}
        timeout={500}
        classNames="fade"
      >
        <Play />
      </CSSTransition>
    </Fragment>
  );
}

export default Start;
