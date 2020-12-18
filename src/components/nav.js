import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import '../styles/hamburgers.css';
import { ColorModeContext, ViewContext } from '../hooks/contexts';

const Nav = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  justify-content: flex-end;
  ul {
    position: absolute;
    right: 0;
    list-style: none;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.25);
    margin: 0;
    z-index: 999;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    pointer-events: none;
    background: var(--menu-bg);
    &[data-active='true'] {
      opacity: 1;
      transform: translateY(6rem);
      pointer-events: all;
    }
  }
  li {
    font-size: 0.8rem;
    margin: 0;
    button {
      color: var(--text-color);
      border: none;
      cursor: pointer;
      box-sizing: border-box;
      display: block;
      text-transform: capitalize;
      padding: 0.25rem 1rem;
      width: 100%;
      text-align: left;
      white-space: nowrap;
      background: transparent;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      &:focus {
        outline: none;
        color: var(--text-color);
        background: var(--nav-highlight);
      }
      &[data-iscurrent='true'] {
        border-left: 5px solid var(--hp-light-blue);
      }
    }
    hr {
      margin: 0.5rem 0;
      border-color: var(--text-color);
    }
  }
  .buttonArea {
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      transform: scale(0.8);
      transition: all 0.2s;
      border-radius: 1rem;
    }
    button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(13, 155, 213, 0.1);
    }
    @media screen and (max-width: 992px) {
      display: block;
    }
  }
`;

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme, setTheme } = useContext(ColorModeContext);
  const { view, setView } = useContext(ViewContext);
  const views = ['current', 'daily', 'hourly'];
  const colorSwitcher = currentTheme => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    document.body.className = currentTheme === 'light' ? 'dark' : '';
  };
  const viewSwitcher = viewTarget => {
    setView(viewTarget);
    setIsCollapsed(true);
  };
  return (
    <Nav>
      <div className="buttonArea">
        <button
          className={
            !isCollapsed
              ? 'hamburger hamburger--spring is-active'
              : 'hamburger hamburger--spring'
          }
          onClick={() => setIsCollapsed(!isCollapsed)}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
      <ul data-active={!isCollapsed} className="nav">
        {views.map(viewMode => (
          <li key={viewMode}>
            <button
              data-iscurrent={viewMode === view}
              type="button"
              onClick={() => viewSwitcher(viewMode)}
            >
              {viewMode} Weather
            </button>
          </li>
        ))}
        <li>
          <hr />
        </li>
        <li>
          <button type="button" onClick={() => colorSwitcher(theme)}>
            {`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          </button>
        </li>
      </ul>
    </Nav>
  );
}

export default Header;
