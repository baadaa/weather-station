import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
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
** MOON
*/
  @keyframes am-weather-moon {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .am-weather-moon {
    animation-name: am-weather-moon;
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
  }

  @keyframes am-weather-moon-star-1 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .am-weather-moon-star-1 {
    animation-name: am-weather-moon-star-1;
    animation-delay: 3s;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }

  @keyframes am-weather-moon-star-2 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .am-weather-moon-star-2 {
    animation-name: am-weather-moon-star-2;
    animation-delay: 5s;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`;

export const Icon02n = () => (
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
    <g filter="url(#blur)" id="cloudy-night-3">
      <g transform="translate(20,10)">
        <g transform="translate(16,4), scale(0.8)">
          <g className="am-weather-moon-star-1">
            <polygon
              fill="var(--star)"
              points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
              stroke="none"
              strokeMiterlimit="10"
            />
          </g>
          <g className="am-weather-moon-star-2">
            <polygon
              fill="var(--star)"
              points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
              stroke="none"
              strokeMiterlimit="10"
              transform="translate(20,10)"
            />
          </g>
          <g className="am-weather-moon">
            <path
              d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z"
              fill="var(--moon)"
              stroke="var(--bg)"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
        <g className="am-weather-cloud-2">
          <path
            d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
            fill="var(--cloud)"
            stroke="var(--bg)"
            strokeLinejoin="round"
            strokeWidth="1.2"
            transform="translate(-20,-11)"
          />
        </g>
      </g>
    </g>
  </Svg>
);
