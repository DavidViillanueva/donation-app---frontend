import React from 'react';
import ReactDOM from 'react-dom';
import DonationApp from './DonationApp';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DonationApp
      expireDate = { new Date(2020,11,1)}
      cause = {'First project React'} 
      amount = { 10000 }
      doners = { 0 }
      describe = {'This project whill focus in learn how to use the framework of development React.js and the use of the technologies related'}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


