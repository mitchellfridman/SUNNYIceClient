
import Header from '../components/Header/header'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
function Register() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div>
      <Header/>
      <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="email"
            placeholder="(Ex. John123...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Your Password..."
          />

          <button type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
    </div>
  )
}

export default Register
