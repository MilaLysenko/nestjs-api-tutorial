import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

import App from './App';
import Header from './components/Header';
import Words from './components/Words';
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
        <Route
          path="/words"
          element={<Words words={undefined} setWords={undefined} addEmptyCard={undefined} handleOnSubmit={undefined} />}
        />
      </Routes>
    </Router>
  </ThemeProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
