import React from 'react';
import Icon from './icons';
import { getTime, getDate } from '../utils/timeUtils';

const HourlyWeather = ({ hourly, view }) => {
  if (view !== 'hourly') return null;
  const str = hourly.map(hour => {
    const { dt, pop, temp, weather } = hour;
    const { main, description, icon } = weather[0];
    return (
      <div key={dt}>
        <h5>
          {getTime(dt)} {getDate(dt)}
        </h5>
        <h6>{main}</h6>
        <h6>{description}</h6>
        <Icon iconId={icon} />
        <p>Temp: {Math.round(temp)}&deg;C</p>
        <p>Precipitation: {pop * 100}%</p>
      </div>
    );
  });
  return (
    <>
      <strong>Hourly</strong>
      <br />
      {str}
    </>
  );
};

export default HourlyWeather;
