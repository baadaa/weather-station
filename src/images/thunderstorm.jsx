import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  @keyframes am-weather-cloud-1 {
    0% {
      transform: translate(-5px, 0px);
    }

    50% {
      transform: translate(10px, 0px);
    }

    100% {
      transform: translate(-5px, 0px);
    }
  }

  .am-weather-cloud-1 {
    animation-name: am-weather-cloud-1;
    animation-duration: 7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes am-weather-cloud-2 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(2px, 0px);
    }

    100% {
      transform: translate(0px, 0px);
    }
  }

  .am-weather-cloud-2 {
    animation-name: am-weather-cloud-2;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  /*
** STROKE
*/
  @keyframes am-weather-stroke {
    0% {
      transform: translate(0px, 0px);
    }

    2% {
      transform: translate(0.3px, 0px);
    }

    4% {
      transform: translate(0px, 0px);
    }

    6% {
      transform: translate(0.5px, 0.4px);
    }

    8% {
      transform: translate(0px, 0px);
    }

    10% {
      transform: translate(0.3px, 0px);
    }

    12% {
      transform: translate(0px, 0px);
    }

    14% {
      transform: translate(0.3px, 0px);
    }

    16% {
      transform: translate(0px, 0px);
    }

    18% {
      transform: translate(0.3px, 0px);
    }

    20% {
      transform: translate(0px, 0px);
    }

    22% {
      transform: translate(1px, 0px);
    }

    24% {
      transform: translate(0px, 0px);
    }

    26% {
      transform: translate(-1px, 0px);
    }

    28% {
      transform: translate(0px, 0px);
    }

    40% {
      fill: var(--hp-gold);
      transform: translate(0px, 0px);
    }

    65% {
      fill: white;
      transform: translate(-1px, 5px);
    }
    61% {
      fill: var(--hp-gold);
    }

    100% {
      transform: translate(0px, 0px);
    }
  }

  .am-weather-stroke {
    animation-name: am-weather-stroke;
    animation-duration: 1.11s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  /*
** RAIN
*/
  @keyframes am-weather-rain {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: -100;
    }
  }

  .am-weather-rain-1 {
    animation-name: am-weather-rain;
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .am-weather-rain-2 {
    animation-name: am-weather-rain;
    animation-delay: 0.25s;
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

export const Icon11 = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="4" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.05" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g transform="translate(35,46), rotate(10)">
      <line
        className="am-weather-rain-1"
        fill="none"
        stroke="var(--precip)"
        strokeDasharray="4,4"
        strokeLinecap="round"
        strokeWidth="2"
        transform="translate(-4,1)"
        x1="0"
        x2="0"
        y1="0"
        y2="8"
      />
      <line
        className="am-weather-rain-2"
        fill="none"
        stroke="var(--precip)"
        strokeDasharray="4,4"
        strokeLinecap="round"
        strokeWidth="2"
        transform="translate(0,-1)"
        x1="0"
        x2="0"
        y1="0"
        y2="8"
      />
      <line
        className="am-weather-rain-1"
        fill="none"
        stroke="var(--precip)"
        strokeDasharray="4,4"
        strokeLinecap="round"
        strokeWidth="2"
        transform="translate(4,0)"
        x1="0"
        x2="0"
        y1="0"
        y2="8"
      />
    </g>
    <g filter="url(#blur)" id="thunder">
      <g transform="translate(20,10)">
        <g className="am-weather-cloud-1">
          <path
            d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
            fill="var(--cloud)"
            stroke="var(--bg)"
            strokeLinejoin="round"
            strokeWidth="1.2"
            transform="translate(-10,-6), scale(0.6)"
          />
        </g>
        <g>
          <path
            d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
            fill="var(--cloud)"
            stroke="var(--bg)"
            strokeLinejoin="round"
            strokeWidth="1.2"
            transform="translate(-20,-11)"
          />
        </g>
        <g transform="translate(-10,28), scale(1.2)">
          <polygon
            className="am-weather-stroke"
            fill="var(--hp-gold)"
            stroke="var(--bg)"
            strokeWidth="1"
            points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9"
          />
        </g>
      </g>
    </g>
  </Svg>
);
