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
** SUN
*/
  @keyframes am-weather-sun {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .am-weather-sun {
    animation-name: am-weather-sun;
    animation-duration: 9s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes am-weather-sun-shiny {
    0% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }

    50% {
      stroke-dasharray: 0.1px 10px;
      stroke-dashoffset: -1px;
    }

    100% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }
  }

  .am-weather-sun-shiny line {
    animation-name: am-weather-sun-shiny;
    animation-duration: 2s;
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

  /*
** SNOW
*/
  @keyframes am-weather-snow {
    0% {
      transform: translateX(0) translateY(0);
    }

    33.33% {
      transform: translateX(-1.2px) translateY(2px);
    }

    66.66% {
      transform: translateX(1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      transform: translateX(-1.6px) translateY(6px);
      opacity: 0;
    }
  }

  @keyframes am-weather-snow-reverse {
    0% {
      transform: translateX(0) translateY(0);
    }

    33.33% {
      transform: translateX(1.2px) translateY(2px);
    }

    66.66% {
      transform: translateX(-1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      transform: translateX(1.6px) translateY(6px);
      opacity: 0;
    }
  }

  .am-weather-snow-1 {
    animation-name: am-weather-snow;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-2 {
    animation-name: am-weather-snow;
    animation-delay: 1.2s;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-3 {
    animation-name: am-weather-snow-reverse;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  /*
** EASING
*/
  .am-weather-easing-ease-in-out {
    animation-timing-function: ease-in-out;
  }
`;

export const Icon01n = () => (
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
    <g filter="url(#blur)" id="night">
      <g transform="translate(20,20)">
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
    </g>
  </Svg>
);
