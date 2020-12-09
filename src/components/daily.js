import React, { useContext } from 'react';
import styled from 'styled-components';
import { ViewContext } from '../hooks/contexts';
import { getTime, getDate } from '../utils/timeUtils';
import Icon, {
  SunriseIcon,
  SunsetIcon,
  MaxTempIcon,
  MinTempIcon,
  PrecipIcon,
} from './icons';

const Wrapper = styled.div`
  display: flex;
  .weekday {
    flex-basis: 14.28571429%;
    svg {
      width: 2rem;
      height: 2rem;
    }
    p svg {
      width: 1rem;
      height: 1rem;
    }
  }
  h5,
  h6,
  p {
    margin: 0;
    font-size: 0.75rem;
  }
  p {
    display: flex;
    align-items: center;
    padding-top: 0.25rem;
  }
`;
const DailyWeather = ({ daily }) => {
  const { view } = useContext(ViewContext);
  if (view !== 'daily') return null;
  const str = daily.map(day => {
    const dateStr = getDate(day.dt, {
      month: 'numeric',
      day: 'numeric',
      weekday: 'short',
    });
    const sunrise = getTime(day.sunrise);
    const sunset = getTime(day.sunset);
    const { pop } = day;
    const { max: dayHigh, min: dayLow } = day.temp;
    const { description, icon, main } = day.weather[0];
    return (
      <div className="weekday" key={day.dt}>
        <h5>{dateStr}</h5>
        <Icon iconId={icon} />
        <h6>{main}</h6>
        {/* <h6>{description}</h6> */}
        <p>
          <PrecipIcon /> {pop * 100}%
        </p>
        <p>
          <SunriseIcon /> {sunrise}
        </p>
        <p>
          <SunsetIcon /> {sunset}
        </p>
        <p>
          <MaxTempIcon /> {Math.round(dayHigh)}&deg;C
        </p>
        <p>
          <MinTempIcon /> {Math.round(dayLow)}&deg;C
        </p>
      </div>
    );
  });

  return <Wrapper>{str}</Wrapper>;
};

export default DailyWeather;
