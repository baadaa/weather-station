import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import CurrentWeather from '../components/current';
import DailyWeather from '../components/daily';
import HourlyWeather from '../components/hourly';

import OWM_API from '../utils/owmApiConfig';

const IndexPage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [view, setView] = useState('current');
  const [isLoading, setIsLoading] = useState(true);
  const { key, url, units, lat, lon } = OWM_API;
  const views = ['current', 'daily', 'hourly'];
  const viewChange = e => {
    const clicked = e.target.value;
    console.log(clicked);
    setView(clicked);
  };
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
        <>
          <div>
            {views.map(viewItem => (
              <label htmlFor={viewItem} key={viewItem}>
                <input
                  type="radio"
                  id={viewItem}
                  name="view"
                  value={viewItem}
                  checked={view === viewItem}
                  onChange={e => viewChange(e)}
                />
                {viewItem}
              </label>
            ))}
          </div>
          <CurrentWeather
            current={weatherData.current}
            daily={weatherData.daily}
            view={view}
          />
          <DailyWeather daily={weatherData.daily} view={view} />
          <HourlyWeather hourly={weatherData.hourly} view={view} />
        </>
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
