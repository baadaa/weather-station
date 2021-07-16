const OWM_API = {
  key: process.env.GATSBY_OWM_API_KEY,
  // key: '924783bda048569443e49dd6a03e5591', -- burner key found online
  url: 'api.openweathermap.org/data/2.5/onecall',
  cityId: 5128549, // New Rochelle: irrelevant now
  lat: 41.3249812,
  lon: -73.8782394,
  units: 'metric',
};

export default OWM_API;
