import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ColorModeContext, ViewContext } from '../hooks/contexts';
import GlobalStyles from '../styles/GlobalStyles';
import { getTime, getDate } from '../utils/timeUtils';

import Nav from './nav';
import './layout.css';

const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  h5.time {
    text-align: center;
    margin: 0;
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
  }
`;
const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('current');
  const [date, setDate] = useState(new Date());
  const colorMode = { theme, setTheme };
  const viewMode = { view, setView };

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <Wrapper>
      <GlobalStyles />
      <ColorModeContext.Provider value={colorMode}>
        <ViewContext.Provider value={viewMode}>
          <Nav />
          <h5 className="time">
            {getDate(date / 1000)} {getTime(date / 1000)}
          </h5>
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
