import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

const Login = (props) => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
  });
  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        setcredentials({
          ...credentials,
          email: e.target.value,
          emailError: true,
        });
      } else {
        setcredentials({
          ...credentials,
          email: e.target.value,
          emailError: false,
        });
      }
    }
    if (e.target.name === "password") {
      if (e.target.value.length < 6) {
        setcredentials({
          ...credentials,
          password: e.target.value,
          passwordError: true,
        });
      } else {
        setcredentials({
          ...credentials,
          password: e.target.value,
          passwordError: false,
        });
      }
    }
  };
  const baseUrl = process.env.BASEURL || "http://localhost:9000"
  const  loginAPI = async (user) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
  };
  fetch(baseUrl + '/user/login',requestOptions)
    .then(res => console.log(res))
  }
  const handleSubmit = e => {
    e.preventDefault();
    // const user = {email: credentials.email, password: credentials.password}
    // loginAPI(user)
    props.history.push('/')
  }

  return (
    <div className="login-conatiner">
      <h1>SIGN IN</h1>
      <form className="form">
        <Input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleValidation}
          placeholder="Email Address"
          style={{border: credentials.emailError? '1px solid red': '1px solid lightgrey'}}
        />
        <Input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleValidation}
          placeholder="Password"
          style={{border: credentials.passwordError? '1px solid red': '1px solid lightgrey'}}
        />
        <button type= 'submit' className="submit-form" onClick={handleSubmit}> SIGN IN</button>
      </form>
      <p>Don't have an account yet ?</p>
        <Link to='/register'>Create an account</Link>
    </div>
  );
};

export default Login;
