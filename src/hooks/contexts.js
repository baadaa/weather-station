import React from 'react';

const views = ['current', 'daily', 'hourly'];

export const ColorModeContext = React.createContext({
  theme: 'dark',
  setTheme: () => {},
});
export const ViewContext = React.createContext(views);
