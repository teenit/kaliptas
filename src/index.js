import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/Router/MainRouter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './Store';
import './i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Suspense fallback='loading'>
      <BrowserRouter>
          <Provider store = {store}>
              <MainRouter />
          </Provider>
      </BrowserRouter>
    </React.Suspense>
);

reportWebVitals();
