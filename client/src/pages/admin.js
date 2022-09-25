import React from "react";
import Container from "react-bootstrap/esm/Container";
import NewFlavor from "../components/Flavors/createFlavor";
import Header from "../components/Header/header";
import Accounts from "../components/Tables/accountTable/accounts";
import Flavors from "../components/Tables/flavorTable/flavor"
import Orders from "../components/Tables/listOfOrders";

function Admin() {
  return (
    <>
      <Header />
      <br />
      <Container>
        <Flavors />
        <NewFlavor/>
        <Orders />
        <Accounts />
      </Container>
    </>
  );
}

export default Admin;
