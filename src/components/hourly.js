import React, { useContext } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Icon, { PrecipIcon } from './icons';
import { ViewContext } from '../hooks/contexts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(48, 150px);
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
  .summary {
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
`;
const HourlyWeather = ({ hourly }) => {
  const { view } = useContext(ViewContext);
  if (view !== 'hourly') return null;
  let prevDay = '';
  const str = hourly.map((hour, index) => {
    const { dt, pop, temp, weather } = hour;
    const { main, icon } = weather[0];
    const currentDay = format(dt * 1000, 'MMM d');
    if (prevDay === '') {
      prevDay = currentDay;
    }
    console.log(currentDay);
    return (
      <div className="hour" key={dt}>
        <h5>
          {format(dt * 1000, 'MMM d')}
          <span> {format(dt * 1000, '(E)')}</span>
        </h5>
        <h5>{format(dt * 1000, 'H:mm')}</h5>
        <div className="summary">
          <Icon iconId={icon} />
          <h6>{main}</h6>
          <p>{Math.round(temp)}&deg;C</p>
          <p>
            <PrecipIcon /> {Math.round(pop * 100)}%
          </p>
        </div>
      </div>
    );
  });
  return <Wrapper>{str}</Wrapper>;
};

export default HourlyWeather;
