/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PokedexApp } from './PokedexApp';
import './styles.css';

import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <PokedexApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
