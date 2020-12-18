import React, { useState, useEffect } from 'react';
import { useInterval } from '../hooks/useInterval';

import Layout from '../components/layout';

import CurrentWeather from '../components/current';
import DailyWeather from '../components/daily';
import HourlyWeather from '../components/hourly';

import OWM_API from '../utils/owmApiConfig';

const IndexPage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [updatedTime, setUpdatedTime] = useState('');
  const { key, url, units, lat, lon } = OWM_API;
  const fetchWeather = () => {
    setIsLoading(true);
    fetch(
      `https://${url}?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}&units=${units}`
    )
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setUpdatedTime(new Date().toLocaleTimeString('en-US'));
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
  useInterval(() => {
    fetchWeather();
  }, 600000);
  return (
    <Layout updatedTime={updatedTime}>
      {!isLoading && !!weatherData.current ? (
        <>
          <CurrentWeather
            current={weatherData.current}
            daily={weatherData.daily}
          />
          <DailyWeather daily={weatherData.daily} />
          <HourlyWeather hourly={weatherData.hourly} />
        </>
      ) : (
        <div>Loading</div>
      )}
    </Layout>
  );
};

export default IndexPage;
