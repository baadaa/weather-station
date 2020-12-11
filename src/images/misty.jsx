import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
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
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  .am-weather-rain-2 {
    animation-name: am-weather-rain;
    animation-delay: 0.25s;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
`;

export const Icon50 = () => (
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
    <g filter="url(#blur)" id="rainy-6">
      <g transform="translate(31,36), rotate(90), scale(1.1)">
        <line
          className="am-weather-rain-1"
          fill="none"
          stroke="var(--precip)"
          strokeDasharray="2,4"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(-4,1)"
          x1="0"
          x2="0"
          y1="4"
          y2="16"
        />
        <line
          className="am-weather-rain-2"
          fill="none"
          stroke="var(--precip)"
          strokeDasharray="16,4"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(0,-1)"
          x1="0"
          x2="0"
          y1="0"
          y2="16"
        />
        <line
          className="am-weather-rain-1"
          fill="none"
          stroke="var(--precip)"
          strokeDasharray="12,4"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(4,0)"
          x1="0"
          x2="0"
          y1="0"
          y2="16"
        />
        <line
          className="am-weather-rain-1"
          fill="none"
          stroke="var(--precip)"
          strokeDasharray="2,4"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(8,0)"
          x1="0"
          x2="0"
          y1="0"
          y2="16"
        />
      </g>
    </g>
  </Svg>
);
