import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function SaltedCaramelAdd() {
  const { flavid } = useParams();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Salted Caramel {flavid}</Card.Title>
          <Card.Text>Enjoy our silky smooth Vanilla ice cream with ripples of salted caramel right through it</Card.Text>
          <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="primary"
            onChange={() => updateFlavors("cho")}>
            Add Scoop
          </ToggleButton>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SaltedCaramelAdd;
