import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./sidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onclick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Build" onClick={toggle}>
            Build your Cone!
          </SidebarLink>
          <SidebarLink to="Flavor" onClick={toggle}>
            Flavors
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toggle}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
