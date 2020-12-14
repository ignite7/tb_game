// React
import { Fragment } from "react";

// Icons
import { GoPlay } from "react-icons/go";

function Start(props) {
  return (
    <Fragment>
      <div className="start-form">
        <form onSubmit={props.onSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={props.onChange}
            name="username"
            ref={props.refUsername}
            className="start-form__username"
            minLength="4"
            maxLength="25"
            required
          />
          {props.error.statusError && (
            <h6 className="start-form__error">{props.error.message}</h6>
          )}
        </form>
      </div>
      <div className="start-play">
        <GoPlay
          onClick={props.onClick}
          name="start"
          className="start-play__icon"
        />
      </div>
    </Fragment>
  );
}

export default Start;
