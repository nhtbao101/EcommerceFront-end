import { React, memo, useState } from "react";
import Layout from "../core/Layout";
import { signin } from "../api/user";
import { Redirect } from "react-router-dom";
import { authentica } from "../auth";

const Singin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectReference: false,
  });

  const { email, password, error, redirectReference } = values;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      error: false,
      [name]: value,
    });
    console.log("name--", name);
    console.log("type--", e.target.type);
    console.log("value", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      error: false,
    });
    console.log("hello");
    signin({ email, password })
      .then((res) => {
        if (res.error) {
          setValues({
            ...values,
            error: res.error,
          });
        } else {
          authentica(res, () => {
            setValues({
              ...values,
              email: "",
              password: "",
              error: "",
              redirectReference: true,
            });
          });
        }
      })
      .catch((err) => {
        console.log("error-", err);
      });
  };

  console.log(values);
  const signInForm = () => (
    <form action="">
      <div className="form-group">
        <label htmlFor="text-mute">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text-mute">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
    </form>
  );

  const redirectUser = () => {
    if (redirectReference) return <Redirect to="/" />;
  };

  return (
    <Layout title="Signin form" description="You need login to watch">
      <div className="text-muted">
        {signInForm()}
        {redirectUser()}
      </div>
    </Layout>
  );
};

export default memo(Singin);
