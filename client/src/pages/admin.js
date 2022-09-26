import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import NewFlavor from "../components/Flavors/createFlavor";
import HeaderAdmin from "../components/Header Admin/header";
import Accounts from "../components/Tables/accountTable/accounts";
import Flavors from "../components/Tables/flavorTable/flavor"
import Orders from "../components/Tables/orderTable/listOfOrders";

import Stack from 'react-bootstrap/Stack';

function Admin() {
  return (
    <>
      <HeaderAdmin/>
      <br />
      
      <Container>

      <Stack gap={3} className="col-md-5 mx-auto">
      <NavLink to="/admin/accounts">
          <Button variant="primary">Accounts</Button>
          </NavLink>
          <br/>
          <NavLink to="/admin/flavors">
          <Button variant="primary">Flavors</Button>
          </NavLink>
          <br/>
          <NavLink to="/admin/orders">
          <Button variant="primary">Orders</Button>
          </NavLink>
    </Stack>

        
      </Container>
    </>
  );
}

export default Admin;
