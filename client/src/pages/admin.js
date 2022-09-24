import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../components/Header/header'
import Flavors from '../components/Tables/flavors'
import Orders from '../components/Tables/orders'

function Admin() {
  return (
    <>
    <Header/>
    <br/>
    <Container>
      
      <Flavors/>

      <Orders/>
    </Container>
    </>
  )
}

export default Admin
