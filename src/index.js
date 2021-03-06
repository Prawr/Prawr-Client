/* Imports */
import React from 'react';
import ReactDOM from 'react-dom';
// Routing
import { BrowserRouter } from 'react-router-dom';

import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));