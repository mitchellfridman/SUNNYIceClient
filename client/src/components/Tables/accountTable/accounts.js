import React from "react";
import Table from "react-bootstrap/Table";
import HeaderAdmin from "../../Header Admin/header";
import TableBody from "./accTableBody";
// import ReactPaginate from "react-paginate"

const Accounts = () => {

  return (
    <>
    <HeaderAdmin/>
      <br />
      <h1>List of Accounts</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Account Id</th>
            <th>Email</th>
            {/* <th>Password</th> */}
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <TableBody/>
        </tbody>
      </Table>
    </>
  );
};

export default Accounts;
