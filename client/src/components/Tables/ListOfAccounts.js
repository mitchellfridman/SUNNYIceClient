import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Accounts = () => {
  return (
    <>
      <h1>List of Accounts</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Account Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Last Order date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chocolate</td>
            <td>Very Long Description</td>
            <td>yes</td>
            <td>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Chocolate</td>
            <td>Very Long Description</td>
            <td>yes</td>
            <td>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Chocolate</td>
            <td>Very Long Description</td>
            <td>no</td>
            <td>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Accounts;
