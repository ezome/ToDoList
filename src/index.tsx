import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDo } from './components'
import './style.sass'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);