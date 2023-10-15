import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import AppRouter from './routers';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Provider>
  );
}
