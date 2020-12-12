import React, { useContext } from 'react';
import styled from 'styled-components';
import { ViewContext } from '../hooks/contexts';

import { getTime } from '../utils/timeUtils';
import Icon, {
  SunriseIcon,
  SunsetIcon,
  MinTempIcon,
  MaxTempIcon,
} from './icons';

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
      font-size: 7em;
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
    }
    @media screen and (max-width: 1024px) {
      flex-basis: 100%;
    }
    @media screen and (max-width: 768px) {
      h2 {
        font-size: 6em;
      }
      svg {
        width: 13em;
        height: 13em;
      }
    }
    @media screen and (max-width: 640px) {
      h2 {
        font-size: 5em;
      }
      svg {
        width: 11em;
        height: 11em;
      }
    }
    @media screen and (max-width: 550px) {
      h2 {
        font-size: 3.5em;
      }
      svg {
        width: 8em;
        height: 8em;
      }
    }
  }
  .detail {
    flex-basis: 300px;
    margin-left: 40px;
    justify-content: flex-start;
    p {
      margin-right: 1.5rem;
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
    @media screen and (max-width: 1024px) {
      margin-left: 0;
      margin-top: 40px;
      justify-content: center;
    }
  }
`;

const CurrentWeather = ({ current, daily }) => {
  const { view } = useContext(ViewContext);
  if (view !== 'current') return null;
  const { sunrise, sunset, temp, weather: currentWeather } = current;
  const { main, description, icon } = currentWeather[0];
  const { max, min } = daily[0].temp;
  const sunriseAt = getTime(sunrise);
  const sunsetAt = getTime(sunset);
  return (
    <Weather>
      <div className="main">
        {/* {iconList.[icon]} */}
        {/* {console.log(iconList[icon], icon)} */}

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
          {Math.round(min)}&deg;C
        </p>
        <p>
          <span className="icon">
            <MaxTempIcon />
            High
          </span>
          {Math.round(max)}&deg;C
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
