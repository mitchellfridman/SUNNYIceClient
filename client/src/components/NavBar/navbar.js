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
  // Img,
} from "./navbarElements";
// import Logo from '../../Media/icecreampink-resized.jpg'
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Sunny Ice Cream</NavLogo>
          {/* <NavLogo to="/"><img src={Logo} alt="icecreamlogo"/></NavLogo> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/build">Build a Cone!</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="flavor">Flavors</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
