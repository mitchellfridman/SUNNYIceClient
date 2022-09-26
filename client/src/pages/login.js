import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header/header'
import Button from "react-bootstrap/esm/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        navigate("/");
      }
    });
  };
  return (
    <div>
      <Header/>
      <div className="loginContainer">
      <h1>Welcome to the Sunny Ice Cream Shoppe's login page.</h1>
      <h4>Please input your email address and password to sign in.</h4>  
      <label>Email:</label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br/>
      
      <Button onClick={login}> Login </Button>
    </div>
    </div>
  )
}

export default Login
