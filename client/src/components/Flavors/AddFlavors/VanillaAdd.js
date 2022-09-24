import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function VanillaAdd() {
  const {flavid} = useParams();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Vanilla {flavid}</Card.Title>
          <Card.Text>Enjoy our silky smooth Vanilla flavour</Card.Text>
          <Button variant="primary">Add Scoop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VanillaAdd;
