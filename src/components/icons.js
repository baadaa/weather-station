import React from 'react';
import minTemp from '../images/minTemp.svg';
import maxTemp from '../images/maxTemp.svg';

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
  PrecipIcon,
  SunsetIcon,
  SunriseIcon,
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

export default Icon;

export {
  iconList,
  SunriseIcon,
  SunsetIcon,
  MinTempIcon,
  MaxTempIcon,
  PrecipIcon,
};
