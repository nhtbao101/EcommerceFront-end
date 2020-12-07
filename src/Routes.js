import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Home from "./core/Home";
import Layout from "./core/Layout";
import Menu from "./core/Menu";
import Signin from "./user/Singin";
import Signup from "./user/Singup";

Routes.propTypes = {};

function Routes(props) {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      {/* dcm code layout rồi kh bỏ vô chạy đường lz à */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
      {/* </Layout> m ms làm gì thế */}
    </BrowserRouter>
  );
}

export default Routes;
