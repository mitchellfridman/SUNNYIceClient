import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function PupconeAdd() {
  const {flavid} = useParams();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pupcone {flavid}</Card.Title>
          <Card.Text>Our small vanilla pupcones are dog-safe treats for your best four-legged friends</Card.Text>
          <Button variant="primary">Add Scoop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PupconeAdd;
