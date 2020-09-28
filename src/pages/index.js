import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const OWM_API = {
  // key: process.env.GATSBY_OWM_API_KEY,
  key: '924783bda048569443e49dd6a03e5591',
  url: 'api.openweathermap.org/data/2.5/onecall',
  cityId: 5128549,
  lat: 40.911549,
  lon: -73.782341,
  units: 'metric',
};
const getTime = epoch =>
  new Date(epoch * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
const getDate = epoch =>
  new Date(epoch * 1000).toLocaleDateString('en-US', {
    // weekday: null,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

const getCurrent = (current, daily) => {
  const {
    sunrise,
    sunset,
    temp: currentTemp,
    weather: currentWeather,
  } = current;
  const {
    main: todayMain,
    description: todayDesc,
    icon: todayIcon,
  } = currentWeather[0];
  const { max: todayMax, min: todayMin } = daily[0].temp;
  const sunriseAt = getTime(sunrise);
  const sunsetAt = getTime(sunset);
  return (
    <>
      <strong>TODAY</strong>
      <h1>{todayMain}</h1>
      <h2>{todayDesc}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${todayIcon}@2x.png`}
        alt={todayDesc}
      />
      <h3>{todayIcon}</h3>
      <p>current temp: {currentTemp}</p>
      <p>today low: {todayMin}</p>
      <p>today high: {todayMax}</p>
      <p>sunrise: {sunriseAt}</p>
      <p>sunset: {sunsetAt}</p>
    </>
  );
};
const getDaily = daily => {
  const str = daily.map(day => {
    const dateStr = getDate(day.dt);
    const sunrise = getTime(day.sunrise);
    const sunset = getTime(day.sunset);
    const { pop } = day;
    const { max: dayHigh, min: dayLow } = day.temp;
    const { description, icon, main, id } = day.weather[0];
    return (
      <div key={day.dt}>
        <h5>{dateStr}</h5>
        <h6>{main}</h6>
        <h6>{description}</h6>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        {/* <h6>{icon}</h6> */}
        <p>Precipitation: {pop * 100}%</p>
        <p>sunrise: {sunrise}</p>
        <p>sunset: {sunset}</p>
        <p>maxTemp: {dayHigh}</p>
        <p>minTemp: {dayLow}</p>
      </div>
    );
  });

  return str;
};
const parseWeather = ({ current, daily, hourly }) => (
  <div>
    {getCurrent(current, daily)}
    <hr />
    <strong>7 DAY</strong>
    {getDaily(daily)}
  </div>
);
const IndexPage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { key, url, units, lat, lon } = OWM_API;
  const fetchWeather = () => {
    setIsLoading(true);
    fetch(
      `https://${url}?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}&units=${units}`
    )
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setWeatherData(data);
      });
  };
  useEffect(() => {
    if (!weatherData.current) {
      fetchWeather();
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <Layout>
      <SEO title="Home" />
      {!isLoading && !!weatherData.current ? (
        parseWeather(weatherData)
      ) : (
        <div>Loading</div>
      )}
      <button type="button" onClick={fetchWeather}>
        Fetch
      </button>
    </Layout>
  );
};

export default IndexPage;
