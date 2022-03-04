import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #435EBE;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
`;

const NavbarBrand = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-family: Roboto-Black;
  font-size: 1.5rem;
  letter-spacing: 0.7mm;
  padding-left: 2%;
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarBrand to={'/'}>
        Xurpas Examination - Jed Dylan Lee
      </NavbarBrand>
    </Container>
  )
};

export default Navbar;