import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function SunnyRaysAdd() {
  const {flavid} = useParams();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Sunny Rays {flavid}</Card.Title>
          <Card.Text>Enjoy our tart lemon flavour</Card.Text>
          <Button variant="primary">Add Scoop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SunnyRaysAdd;
