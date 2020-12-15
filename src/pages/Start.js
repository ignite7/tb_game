// React
import { Fragment, } from "react";

// Components
import Levels from "../components/Levels";
import Form from "../components/Form";
import Play from "../components/Play";

function Start() {
  return (
    <Fragment>
      <Form />
      <Levels />
      <Play />
    </Fragment>
  );
}

export default Start;
