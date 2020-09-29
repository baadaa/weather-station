import React from 'react';
import styled from 'styled-components';

import { getTime, getDate } from '../utils/timeUtils';
import Icon, {
  SunriseIcon,
  SunsetIcon,
  MinTempIcon,
  MaxTempIcon,
} from './icons';

const Weather = styled.div`
  h5 {
    text-align: center;
    margin: 0;
  }
  .main,
  .detail {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }
  .main {
    min-height: 15rem;
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
      font-size: 2.5rem;
      margin-left: 1.5rem;
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
      width: 80px;
      height: 80px;
    }
  }
  .detail {
    p + p {
      margin-left: 1.5rem;
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

const CurrentWeather = ({ current, daily, view }) => {
  if (view !== 'current') return null;
  const { sunrise, sunset, temp, weather: currentWeather } = current;
  const { main, description, icon } = currentWeather[0];
  const { max, min } = daily[0].temp;
  const sunriseAt = getTime(sunrise);
  const sunsetAt = getTime(sunset);
  return (
    <Weather>
      <h5>
        {getDate(new Date().getTime() / 1000)}{' '}
        {getTime(new Date().getTime() / 1000)}
      </h5>
      <div className="main">
        <Icon iconId={icon} />
        <h2>{Math.round(temp)}&deg;C</h2>
        <h3>{main}</h3>
        <p className="desc">{description}</p>
      </div>
      <div className="detail">
        <p>
          <span className="icon">
            <MinTempIcon />
            Low
          </span>
          {min}
        </p>
        <p>
          <span className="icon">
            <MaxTempIcon />
            High
          </span>
          {max}
        </p>
        <p>
          <span className="icon short">
            <SunriseIcon />
            Sunrise
          </span>
          {sunriseAt}
        </p>
        <p>
          <span className="icon short">
            <SunsetIcon />
            Sunset
          </span>{' '}
          {sunsetAt}
        </p>
      </div>
    </Weather>
  );
};

export default CurrentWeather;
