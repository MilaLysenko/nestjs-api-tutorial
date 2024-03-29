import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App';
import Header from './components/Header';
import Lists from './pages/Lists';
import reportWebVitals from './reportWebVitals';
import theme from './theme';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        {/*TODO: remove element with props*/}
        <Route
          path="/lists"
          element={<Lists />}
        />
      </Routes>
    </Router>
  </ThemeProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
