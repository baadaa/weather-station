import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: flex-end;
`;

const Header = () => <Nav>TEST</Nav>;

export default Header;
