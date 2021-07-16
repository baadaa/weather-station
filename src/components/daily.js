import React, { useContext } from 'react';
import { format } from 'date-fns';
import { useMediaQuery } from 'react-responsive';

import styled from 'styled-components';
import { ViewContext } from '../hooks/contexts';
import Icon, { PrecipIcon, SunriseIcon, SunsetIcon } from './icons';

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
  .sunriseSunset svg {
    fill: var(--precip);
    margin-right: 3px !important;
  }
  .weekday {
    flex-basis: 14.28571429%;
    svg {
      width: 5rem;
      height: 5rem;
    }
    p svg {
      width: 0.85rem;
      height: 0.85rem;
      margin: 0;
    }
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-basis: auto;
      width: 100%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      align-items: center;
      border-top: 1px solid var(--thermo);
      &:last-of-type {
        border-bottom: 1px solid var(--thermo);
      }
      .dateblock {
        flex-basis: 150px;
        flex-shrink: 0;
        padding: 1rem 0;
      }
      .minmax {
        width: 100%;
      }
      .sunriseSunset {
        display: none;
      }
    }
  }
  .summary,
  .minmax,
  .sunriseSunset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0;
    @media screen and (max-width: 1024px) {
      flex-direction: row;
      padding: 0 1rem;
    }
  }
  .summary {
    & > div svg {
      fill: var(--precip);
    }
    @media screen and (max-width: 1024px) {
      padding: 0;
    }
  }
  .minmax {
    padding: 1.5rem 0;
    position: relative;
    @media screen and (max-width: 1024px) {
      padding: 0 3rem;
    }
  }
  .thermo {
    width: 100%;
    p {
      position: absolute;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      &:first-of-type {
        transform: translateY(-1.8em);
      }
      &:last-of-type {
        transform: translateY(1.8em);
      }
    }
    height: 6rem;
    position: relative;
    border-radius: 1rem;
    /* background: var(--thermo); */
    @media screen and (max-width: 1024px) {
      height: 2rem;
      width: 100%;
      p {
        width: auto;
        left: auto;
        display: inline-block;
      }
      p:first-of-type {
        width: 4em;
        transform: translateY(0.3em) translateX(-4.5em);
        text-align: right;
      }
      p:last-of-type {
        width: 4em;
        /* width: auto; */
        justify-content: flex-start;
        text-align: left;
        transform: translateY(0.3em) translateX(4.5em);
      }
    }
  }
  .temp {
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
    width: 0.6rem;
    position: absolute;
    right: 0;
    border-radius: 2rem;
    background: red;
    background: var(--thermo);
    left: calc(50% - 0.3rem);
    @media screen and (max-width: 1024px) {
      height: 0.6rem;
      width: auto;
      top: calc(50% - 0.3rem);
    }
  }
  h5,
  h6,
  p {
    margin: 0;
    font-size: 0.75rem;
    text-align: center;
  }
  h5 span {
    opacity: 0.3;
  }
  p {
    display: flex;
    align-items: center;
    padding-top: 0.25rem;
  }
`;
const DailyWeather = ({ daily }) => {
  const { view } = useContext(ViewContext);
  const isSmaller = useMediaQuery({ query: '(max-width: 1024px)' });
  if (view !== 'daily') return null;
  const maxAll = Math.max(...daily.map(day => Math.round(day.temp.max)));
  const minAll = Math.min(...daily.map(day => Math.round(day.temp.min)));
  const totalRange = maxAll - minAll;
  const str = daily.map(day => {
    const sunrise = format(day.sunrise * 1000, 'H:mm');
    const sunset = format(day.sunset * 1000, 'H:mm');
    const { pop } = day;
    const { max: dayHigh, min: dayLow } = day.temp;
    const { icon, main } = day.weather[0];
    const topPos = `${((maxAll - Math.round(dayHigh)) / totalRange) * 100}%`;
    const bottomPos = `${((Math.round(dayLow) - minAll) / totalRange) * 100}%`;
    return (
      <div className="weekday" key={day.dt}>
        <div className="dateblock">
          <h5>
            {format(day.dt * 1000, 'MMM d')}
            <span> {format(day.dt * 1000, '(E)')}</span>
          </h5>
          <div className="summary">
            <Icon iconId={icon} />
            <div>
              <h6>{main}</h6>
              <p>
                <PrecipIcon /> {Math.round(pop * 100)}%
              </p>
            </div>
          </div>
        </div>
        <div className="minmax">
          <div className="thermo">
            <div
              className="temp"
              style={{
                top: !isSmaller && topPos,
                bottom: !isSmaller && bottomPos,
                left: isSmaller && bottomPos,
                right: isSmaller && topPos,
              }}
            />
            <p
              style={{
                top: !isSmaller && topPos,
                left: isSmaller && bottomPos,
              }}
            >
              {!isSmaller ? Math.round(dayHigh) : Math.round(dayLow)}&deg;C
            </p>
            <p
              style={{
                bottom: !isSmaller && bottomPos,
                right: isSmaller && topPos,
              }}
            >
              {!isSmaller ? Math.round(dayLow) : Math.round(dayHigh)}&deg;C
            </p>
          </div>
        </div>
        <div className="sunriseSunset">
          <p>
            <SunriseIcon />
            {sunrise}
          </p>
          <p>
            <SunsetIcon />
            {sunset}
          </p>
        </div>
      </div>
    );
  });

  return <Wrapper>{str}</Wrapper>;
};

export default DailyWeather;
