import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './navbarElements';

function Navbar() {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>Sunny</NavLogo>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;
