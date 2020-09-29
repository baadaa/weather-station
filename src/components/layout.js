/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';

import Nav from './nav';
import './layout.css';

const Wrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
const Layout = ({ children }) => (
  <Wrapper>
    <Nav />
    <main>{children}</main>
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        fontSize: 'small',
      }}
    >
      © {new Date().getFullYear()}, {` `}
      <a
        style={{ textDecoration: 'none', color: 'white' }}
        href="https://www.basinbald.com"
      >
        Bumhan Yu
      </a>
    </footer>
  </Wrapper>
);

export default Layout;
