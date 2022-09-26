import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// // import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewFlavor() {
//   let navigate = useNavigate();
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
            <Form.Control type="text" name="flavourName" required />
            <Form.Label>Flavor Description</Form.Label>
            <Form.Control type="text"  name="flavourDescription" required />
            <Form.Text className="text-muted">
              Keep it short and sweet.
            </Form.Text>
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default NewFlavor;
