import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Orders = () => {
  return (
    <>
      <h1>Orders</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Price</th>
            <th>Status</th>
            <th>Cone Id</th>
            <th>Scoop 1</th>
            <th>Scoop 2</th>
            <th>Scoop 3</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>12.13$</td>
            <td>Incomplete</td>
            <td>4234</td>
            <td>Choco</td>
            <td></td>
            <td></td>
            <td>
              <Button variant="warning">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>{" "}
            </td>
          </tr>
          <tr>
            <td>102</td>
            <td>26.47$</td>
            <td>Complete</td>
            <td>4234</td>
            <td>Vanilla</td>
            <td>Vanilla</td>
            <td>Vanilla</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>102</td>
            <td>26.47$</td>
            <td>Complete</td>
            <td>4234</td>
            <td>Vanilla</td>
            <td>Vanilla</td>
            <td>Vanilla</td>
            <td>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Orders;
