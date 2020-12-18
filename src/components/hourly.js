import React, { useContext } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Icon, { PrecipIcon } from './icons';
import { ViewContext } from '../hooks/contexts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 8.3%);
  grid-row-gap: 20px;
  max-width: 100%;
  overflow-x: scroll;
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
    justify-content: center;
    padding-top: 0.25rem;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 0;
  }
  .hour {
    flex-basis: 100%;
    svg {
      width: 5rem;
      height: 5rem;
    }
    p svg {
      width: 0.85rem;
      height: 0.85rem;
      margin: 0;
      fill: var(--precip);
    }
    @media screen and (max-width: 1024px) {
      h5 {
        flex: 0 0 50px;
      }
      display: flex;
      flex-wrap: wrap;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      align-items: center;
      border-top: 1px solid var(--thermo);
      &:last-of-type {
        border-bottom: 1px solid var(--thermo);
      }
    }
  }
  .summary,
  .minmax {
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
    @media screen and (max-width: 1024px) {
      flex: 0 0 200px;
      padding: 0;
    }
    @media screen and (max-width: 480px) {
      flex: 0 0 140px;
    }
  }
  .minmax {
    margin: 1.5rem 0;
    padding: 1.5rem 0;
    position: relative;
    @media screen and (max-width: 1024px) {
      margin: 0 1.5rem;
      flex: 1;
    }
  }
  .thermo {
    width: 100%;
    p {
      display: inline-block;
      text-align: center;
    }
    height: 6rem;
    position: relative;
    border-radius: 1rem;
    @media screen and (max-width: 1024px) {
      height: 2rem;
      width: 100%;
      p {
        font-size: 0.75rem;
        padding: 0.5rem;
      }
    }
  }
  .tempLine {
    width: 3px;
    opacity: 0.3;
    top: 0;
    border-radius: 10px;
    bottom: 0;
    background: var(--thermo);
    position: absolute;
    left: calc(50% - 1.5px);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    &::after,
    &::before {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
      position: absolute;
      width: 9px;
      height: 9px;
      transform: translateX(-3px);
      border-radius: 9px;
      content: '';
      background: var(--thermo);
      top: 0;
      left: 0;
      @media screen and (max-width: 1024px) {
        transform: translateY(-3px);
      }
    }
    &::after {
      bottom: 0;
      top: auto;
      @media screen and (max-width: 1024px) {
        right: 0;
        left: auto;
        transform: translateY(3px);
      }
    }

    @media screen and (max-width: 1024px) {
      height: 3px;
      width: auto;
      left: 0;
      right: 0;
      bottom: auto;
      top: calc(50% - 1.5px);
    }
  }
  .temp {
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
    width: 3rem;
    position: absolute;
    right: 0;
    text-align: center;
    border-radius: 2rem;
    background: var(--thermo);
    left: calc(50% - 1.5rem);
    transform: translateY(-0.75rem);
    @media screen and (max-width: 1024px) {
      height: 2rem;
      width: auto;
      left: auto;
      top: calc(50% - 1rem);
      transform: translateX(1.5rem);
    }
  }
`;
const HourlyWeather = ({ hourly }) => {
  const { view } = useContext(ViewContext);
  const isSmaller = useMediaQuery({ query: '(max-width: 1024px)' });
  if (view !== 'hourly') return null;
  const first12hours = hourly.slice(0, 24);
  console.log(hourly[0]);
  const maxAll = Math.max(...first12hours.map(day => Math.round(day.temp)));
  const minAll = Math.min(...first12hours.map(day => Math.round(day.temp)));
  const totalRange = maxAll - minAll;
  console.log(maxAll, minAll, totalRange);
  const str = first12hours.map(hour => {
    const { dt, pop, temp, weather } = hour;
    const { main, icon } = weather[0];
    console.log('maxAll', maxAll, 'temp', temp);
    const topPos = `${((maxAll - Math.round(temp)) / totalRange) * 100}%`;
    return (
      <div className="hour" key={dt}>
        <h5>{format(dt * 1000, 'H:mm')}</h5>
        <div className="summary">
          <Icon iconId={icon} />
          <div>
            <h6>{main}</h6>
            <p>
              <PrecipIcon /> {Math.round(pop * 100)}%
            </p>
          </div>
        </div>
        <div className="minmax">
          <div className="tempLine" />
          <div className="thermo">
            <div
              className="temp"
              style={{
                top: !isSmaller && topPos,
                right: isSmaller && topPos,
              }}
            >
              <p>{Math.round(temp)}&deg;C</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <Wrapper>{str}</Wrapper>;
};

export default HourlyWeather;
