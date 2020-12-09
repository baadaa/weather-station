/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { ColorModeContext, ViewContext } from '../hooks/contexts';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './nav';
import './layout.css';

const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('current');
  const colorMode = { theme, setTheme };
  const viewMode = { view, setView };
  return (
    <Wrapper>
      <GlobalStyles />
      <ColorModeContext.Provider value={colorMode}>
        <ViewContext.Provider value={viewMode}>
          <Nav />
          <main>{children}</main>
          <footer
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '1rem',
              opacity: 0.5,
              border: '1px solid red',
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
        </ViewContext.Provider>
      </ColorModeContext.Provider>
    </Wrapper>
  );
};

export default Layout;
