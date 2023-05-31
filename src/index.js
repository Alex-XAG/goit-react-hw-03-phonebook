import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Reader } from 'components/Reader/Reader';
import './index.css';
import publications from './publications.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <Reader publications={publications} />
  </React.StrictMode>
);
