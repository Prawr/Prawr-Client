import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components
import Root from './components/root';
// Import Routes
import Login from './routes/login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path='/' component={ Root } />
        <Route path='/login' component={ Login } />
      </div>
    );
  }
}

export default App;