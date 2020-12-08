import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import '../styles/hamburgers.css';
import { ColorModeContext } from '../hooks/contexts';

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
    padding: 1rem 0;
    border-radius: 1.5rem;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    pointer-events: none;
    background: #fff;
    &[data-active='true'] {
      opacity: 1;
      transform: translateY(8rem);
      pointer-events: all;
    }
  }
  li {
    padding: 1rem 0;
    font-size: 1.5rem;
    color: var(--hp-dark-gray);
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
  console.log(theme);
  const colorSwitcher = currentTheme => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    if (currentTheme === 'light') {
      document.body.className = 'dark';
    } else {
      document.body.className = '';
    }
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
        <li>
          <button type="button" onClick={() => colorSwitcher(theme)}>
            SWITCH
          </button>
        </li>
      </ul>
    </Nav>
  );
}

export default Header;
