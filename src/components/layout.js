import React, { useState, useEffect } from 'react';
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
  padding: 1rem;
  padding-top: 6rem;
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
    h6 {
      font-size: 0.65rem;
      margin-top: 0.4rem;
      opacity: 0.4;
      font-weight: 400;
    }
  }
  .lastUpdate {
    position: relative;
    &::after {
      position: absolute;
      content: 'Automatically updates every 10 minutes';
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.2s, transform 0.2s;
      font-size: smaller;
      width: 300px;
    }
    &:hover::after {
      opacity: 1;
      transform: translateY(-1.2rem);
    }
  }
`;
const Layout = ({ updatedTime, children }) => {
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

  const loadPreference = () => {
    if (!JSON.parse(localStorage.getItem('b_owm_theme'))) {
      setTheme('light');
      setView('current');
      return null;
    }
    const currentTheme = JSON.parse(localStorage.getItem('b_owm_theme'));
    setTheme(currentTheme);
    document.body.className = currentTheme === 'dark' ? 'dark' : '';
    setView(JSON.parse(localStorage.getItem('b_owm_view')));
  };
  const savePreference = () => {
    localStorage.setItem('b_owm_theme', JSON.stringify(theme));
    localStorage.setItem('b_owm_view', JSON.stringify(view));
  };

  useEffect(() => {
    loadPreference();
  }, []);

  useEffect(() => {
    savePreference();
  }, [theme, view]);

  return (
    <Wrapper>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Baldie Weather</title>
        <meta
          name="description"
          content="Just another weather app via OpenWeatherMap"
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
            <h3>{view} weather </h3>
          </div>
          <main>{children}</main>
          <footer
            style={{
              position: 'absolute',
              bottom: 0,
              right: '1rem',
              left: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              color: 'var(--content)',
              height: '1rem',
              opacity: 0.4,
              fontSize: 'small',
            }}
          >
            <span className="lastUpdate">Last updated at {updatedTime}</span>
            <span>
              © {new Date().getFullYear()}, {` `}
              <a
                style={{ textDecoration: 'none', color: 'var(--content)' }}
                href="https://www.basinbald.com"
              >
                Bumhan Yu
              </a>
            </span>
          </footer>
        </ViewContext.Provider>
      </ColorModeContext.Provider>
    </Wrapper>
  );
};

export default Layout;
