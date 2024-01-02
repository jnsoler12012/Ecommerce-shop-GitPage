import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Infrastructure/App';

ReactDOM.createRoot(
  document.getElementById("root"),
).render(
  <div className='noSelect'>
    <App />
  </div>
);