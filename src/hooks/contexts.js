import React from 'react';

export const ColorModeContext = React.createContext({
  theme: 'dark',
  setTheme: () => {},
});
export const ViewContext = React.createContext({
  view: 'current',
  setView: () => {},
});
