import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// START: DONT REMOVE THE FOLLOWING IMPORTS
import './i18n';
// END: DONT REMOVE THE FOLLOWING IMPORTS

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
