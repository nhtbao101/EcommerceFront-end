import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import "bootswatch/dist/slate/bootstrap.min.css";

import { signout } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#f0f" };
  } else return { color: "fff" };
};

function Menu(props) {
  const { history } = props;
  return (
    <div>
      <ul className="navbar navbar-expand-lg navbar-dark bg-primary">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/signin")}
            to="/signin"
          >
            Signin
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/signup")}
            to="/signup"
          >
            Signup
          </Link>
        </li>

        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "#fff" }}
            onClick={() => {
              signout(() => {
                history.push("/signup");
              });
            }}
          >
            Signout
          </span>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Menu);
