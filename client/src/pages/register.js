import "./register.css";
import Header from '../components/Header/header'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
function Register() {

    const navi = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/register", data).then(() => {
      navi("/login")
      // console.log(data); for testing
    });    
  };

  return (
    <div>
      <Header />
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <h1>Welcome to the Sunny Ice Cream Shoppe's account creation page.</h1>
            <h4>Please input your email address, select a password and then hit the "Register" button.</h4>
            <label>Email: </label>
            <ErrorMessage name="email" component="span" />
            <Field

              name="email"
              placeholder="(Ex. John123...)"
            />

            <label>Password: </label>
            <ErrorMessage name="password" component="span" />
            <Field

              type="password"
              name="password"
              placeholder="Your Password..."
            />
            <br />

            <Button type="submit"> Register</Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Register
