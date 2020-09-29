import React from 'react';
import i01d from '../images/01d.svg';
import i01n from '../images/01n.svg';
import i02d from '../images/02d.svg';
import i02n from '../images/02n.svg';
import i03d from '../images/03d.svg';
import i03n from '../images/03n.svg';
import i04d from '../images/04d.svg';
import i04n from '../images/04n.svg';
import i09d from '../images/09d.svg';
import i09n from '../images/09n.svg';
import i10d from '../images/10d.svg';
import i10n from '../images/10n.svg';
import i11d from '../images/11d.svg';
import i11n from '../images/11n.svg';
import i13d from '../images/13d.svg';
import i13n from '../images/13n.svg';
import i50d from '../images/50d.svg';
import i50n from '../images/50n.svg';
import sunrise from '../images/sunrise.svg';
import sunset from '../images/sunset.svg';
import minTemp from '../images/minTemp.svg';
import maxTemp from '../images/maxTemp.svg';
import precipitation from '../images/precipitation.svg';

const iconList = [
  { id: '01d', icon: i01d },
  { id: '01n', icon: i01n },
  { id: '02d', icon: i02d },
  { id: '02n', icon: i02n },
  { id: '03d', icon: i03d },
  { id: '03n', icon: i03n },
  { id: '04d', icon: i04d },
  { id: '04n', icon: i04n },
  { id: '09d', icon: i09d },
  { id: '09n', icon: i09n },
  { id: '10d', icon: i10d },
  { id: '10n', icon: i10n },
  { id: '11d', icon: i11d },
  { id: '11n', icon: i11n },
  { id: '13d', icon: i13d },
  { id: '13n', icon: i13n },
  { id: '50d', icon: i50d },
  { id: '50n', icon: i50n },
];
const Icon = ({ iconId }) => {
  const targetIcon = iconList.find(item => item.id === iconId);
  return (
    <svg>
      <use xlinkHref={`#${targetIcon.icon.id}`} />
    </svg>
  );
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

export { SunriseIcon, SunsetIcon, MinTempIcon, MaxTempIcon, PrecipIcon };
