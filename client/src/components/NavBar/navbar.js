import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Sunny</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Build">Build your Cone!</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Flavor">Flavors</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
