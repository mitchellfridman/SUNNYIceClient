import React from "react";
import Container from "react-bootstrap/esm/Container";
import Header from "../components/Header/header";
import Accounts from "../components/Tables/ListOfAccounts";
import Flavors from "../components/Tables/listOfFlavors";
import Orders from "../components/Tables/listOfOrders";

function Admin() {
  return (
    <>
      <Header />
      <br />
      <Container>
        <Flavors />

        <Orders />
        <Accounts />
      </Container>
    </>
  );
}

export default Admin;
