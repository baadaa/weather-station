import React from 'react';
import sunrise from '../images/sunrise.svg';
import sunset from '../images/sunset.svg';
import minTemp from '../images/minTemp.svg';
import maxTemp from '../images/maxTemp.svg';
import precipitation from '../images/precipitation.svg';

import {
  Icon01d,
  Icon01n,
  Icon02d,
  Icon02n,
  Icon0304,
  Icon09,
  Icon10d,
  Icon10n,
  Icon11,
  Icon13,
  Icon50,
} from './iconList';

const iconList = [
  { id: '01d', icon: <Icon01d /> },
  { id: '01n', icon: <Icon01n /> },
  { id: '02d', icon: <Icon02d /> },
  { id: '02n', icon: <Icon02n /> },
  { id: '03d', icon: <Icon0304 /> },
  { id: '03n', icon: <Icon0304 /> },
  { id: '04d', icon: <Icon0304 /> },
  { id: '04n', icon: <Icon0304 /> },
  { id: '09d', icon: <Icon09 /> },
  { id: '09n', icon: <Icon09 /> },
  { id: '10d', icon: <Icon10d /> },
  { id: '10n', icon: <Icon10n /> },
  { id: '11d', icon: <Icon11 /> },
  { id: '11n', icon: <Icon11 /> },
  { id: '13d', icon: <Icon13 /> },
  { id: '13n', icon: <Icon13 /> },
  { id: '50d', icon: <Icon50 /> },
  { id: '50n', icon: <Icon50 /> },
];
const Icon = ({ iconId }) => {
  const targetIcon = iconList.find(item => item.id === iconId);
  return targetIcon.icon;
};

const SunriseIcon = () => (
  <svg>
    <use xlinkHref={`#${sunrise.id}`} />
  </svg>
);

const SunsetIcon = () => (
  <svg>
    <use xlinkHref={`#${sunset.id}`} />
  </svg>
);

const MinTempIcon = () => (
  <svg>
    <use xlinkHref={`#${minTemp.id}`} />
  </svg>
);

const MaxTempIcon = () => (
  <svg>
    <use xlinkHref={`#${maxTemp.id}`} />
  </svg>
);

const PrecipIcon = () => (
  <svg>
    <use xlinkHref={`#${precipitation.id}`} />
  </svg>
);

export default Icon;

export {
  iconList,
  SunriseIcon,
  SunsetIcon,
  MinTempIcon,
  MaxTempIcon,
  PrecipIcon,
};
