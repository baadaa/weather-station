import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { format } from 'date-fns';
import { ColorModeContext, ViewContext } from '../hooks/contexts';
import { useInterval } from '../hooks/useInterval';
import GlobalStyles from '../styles/GlobalStyles';

import Nav from './nav';

const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 1rem;
  padding-top: 5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  .currentViewInfo {
    position: absolute;
    top: 0.75rem;
    left: 1rem;
    h3 {
      font-size: 1rem;
      text-align: left;
      text-transform: capitalize;
    }
    h5 {
      margin-bottom: 0.3rem;
      font-size: 0.75rem;
      opacity: 0.4;
    }
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

  useInterval(() => {
    tick();
  }, 1000);

  return (
    <Wrapper>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <ColorModeContext.Provider value={colorMode}>
        <ViewContext.Provider value={viewMode}>
          <Nav />
          <div className="currentViewInfo">
            <h5>
              {format(date, 'PP (ccc)')} • {format(date, 'pp')}
            </h5>
            <h3>{view} weather</h3>
          </div>
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
