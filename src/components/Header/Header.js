import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Spacer from "../Spacer";
import SuperHeader from "../SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeaderWrapper>
        <MainHeader>
          <Logo />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Spacer axis={"horizontal"} size={138} />
        </MainHeader>
      </MainHeaderWrapper>
    </header>
  );
};

const MainHeaderWrapper = styled.div`
  display: flex;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  align-items: center;
`;

const MainHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
  padding: 0 32px;
  justify-content: space-between;
`;

const Nav = styled.nav`
  flex: 0 0 700px;
  display: flex;
  justify-content: space-evenly;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
