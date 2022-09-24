import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function RainbowAdd() {
  const {flavid} = useParams();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Rainbow {flavid}</Card.Title>
          <Card.Text>Enjoy our bubblegum flavoured ice cream featuring all the colours of the rainbow</Card.Text>
          <Button variant="primary">Add Scoop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RainbowAdd;
