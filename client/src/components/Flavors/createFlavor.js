import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// // import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function NewFlavor() {
  let navigate = useNavigate();
  const initialValues = {
    flavourName: "",
    flavourDescription: "",
    flavourActive: true,
  };
  const validationSchema = Yup.object().shape({
    flavourName: Yup.string().required("Required Field"),
    flavourDescription: Yup.string().required("Required Field"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/flavours/newflav", data).then(() => {
      navigate("/admin"); //refresh admin page
        console.log(data + "****************************");
    });
    
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <h3>Add new Flavor</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Flavor Name</Form.Label>
            <Field type="text" name="flavourName" required />
            <Form.Label>Flavor Description</Form.Label>
            <Field type="text"  name="flavourDescription" required />
            <Form.Text className="text-muted">
              Keep it short and sweet.
            </Form.Text>
          </Form.Group>

          <Button variant="success" type="submit" onSubmit={onSubmit}>
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default NewFlavor;
