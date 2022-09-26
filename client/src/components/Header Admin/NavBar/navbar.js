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

function NavbarAdmin({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/admin">Admin</NavLogo>
          {/* <NavLogo to="/"><img src={Logo} alt="icecreamlogo"/></NavLogo> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/admin/accounts">Accounts</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/admin/flavors">Flavors</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/admin/orders">Orders</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/logout">Logout</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavbarAdmin;
