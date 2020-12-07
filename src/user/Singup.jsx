import React, { useState } from "react";
import Layout from "../core/Layout";
import { signup } from "../api/user";
import { Link } from "react-router-dom";

const Singup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;
  // --------------------------------------------------------
  const handleValuesChanges = (e) => {
    const { value, name } = e.target;
    setValues({
      // do lúc m set lại state chỗ này thì state vẫn chưa thay đổi
      ...values,
      error: false,
      [name]: value,
    });
    console.log(name);
    // console.log(value); //mà m console log chỗ này thì state vẫn là state cũ nên thế đó thế t làm đúng à ừ
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((res) => {
        // res is error ?
        if (res.error) {
          setValues({
            ...values,
            error: res.error,
            success: false,
          });
        } // res is not error
        else {
          console.log("res--dataHaha", res);
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((error) => {
        //api error
        console.log(error);
      });
  };
  console.log(values);
  const signUpForm = () => (
    <form action="">
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={(e) => handleValuesChanges(e)}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={email}
          onChange={(e) => handleValuesChanges(e)}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={password}
          onChange={(e) => handleValuesChanges(e)}
        />
      </div>
      <button className="btn btn-primary" onClick={(e) => onSubmit(e)}>
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div style={{ width: "300px", display: error == "" ? "none" : "" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div style={{ width: "300px", display: success ? "" : "none" }}>
      Success signup, <Link to="/signin">SIGNIN</Link> now
    </div>
  );

  return (
    <Layout
      title="Sign up"
      description="This is sign up page"
      className="container"
    >
      {showError()}
      {showSuccess()}
      <div className="text-muted">{signUpForm()}</div>
    </Layout>
  );
};

export default Singup;
