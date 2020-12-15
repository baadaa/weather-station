import React, { useContext } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { ViewContext } from '../hooks/contexts';

import Icon from './icons';

const Weather = styled.div`
  .main,
  .detail {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }
  .main {
    /* flex: 1; */
    min-height: 15rem;
    font-size: 1rem;
    h3 {
      flex-basis: 100%;
      text-align: center;
    }
    h2,
    h3,
    p {
      margin: 0;
    }
    h2 {
      font-size: 6em;
      font-weight: 200;
    }
    h3 {
      font-size: 1.75rem;
      font-weight: 200;
      margin-top: 0.25em;
    }
    .desc {
      margin-top: 0.5em;
      font-size: 0.75rem;
    }
    svg {
      width: 15em;
      height: 15em;
      margin-right: -1.5em;
      margin-bottom: -1.5em;
    }
    @media screen and (max-width: 1024px) {
      flex-basis: 100%;
    }
    @media screen and (max-width: 768px) {
      h2 {
        font-size: 4.8em;
      }
      svg {
        width: 12em;
        height: 12em;
      }
    }
    @media screen and (max-width: 640px) {
      h2 {
        font-size: 4.4em;
      }
      svg {
        width: 11em;
        height: 11em;
        margin-right: -1.1em;
        margin-bottom: -1.1em;
      }
    }
    @media screen and (max-width: 550px) {
      h2 {
        font-size: 4em;
      }
      svg {
        width: 10em;
        height: 10em;
        margin-right: -1em;
        margin-bottom: -1em;
      }
    }
  }
  .detail {
    display: block;
    margin-top: 40px;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
    p {
      margin-right: 1.5rem;
    }
    .lowAndHigh {
      display: flex;
      justify-content: space-between;
    }
    .thermometer {
      background: var(--thermo);
      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
      border-radius: 4rem;
      margin: 0 0.5rem;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
    }
    .sunriseSunset {
      margin-top: 0.3rem;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.75rem;
      }
    }
    .icon {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.5rem;
      svg {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
      }
      &.short svg {
        border: 1px solid red;
        width: 2rem;
        height: 1.6rem;
      }
    }
  }
`;

const CurrentWeather = ({ current, daily }) => {
  const { view } = useContext(ViewContext);
  if (view !== 'current') return null;
  const { sunrise, sunset, temp, weather: currentWeather } = current;
  const { main, description, icon } = currentWeather[0];
  const { max, min } = daily[0].temp;
  return (
    <Weather>
      <div className="main">
        <Icon iconId={icon} />
        <h2>{Math.round(temp)}&deg;C</h2>
        <h3>{main}</h3>
        <p className="desc">{description}</p>
      </div>
      <div className="detail">
        <div className="lowAndHigh">
          <div className="deg">{Math.round(min)}&deg;C</div>
          <div className="thermometer" />
          <div className="deg">{Math.round(max)}&deg;C</div>
        </div>
        <div className="sunriseSunset">
          <div>
            <span>Sunrise</span>
            <br />
            {format(sunrise * 1000, 'H:mm')}
          </div>
          <div>
            <span>Sunset</span>
            <br />
            {format(sunset * 1000, 'H:mm')}
          </div>
        </div>
      </div>
    </Weather>
  );
};

export default CurrentWeather;
