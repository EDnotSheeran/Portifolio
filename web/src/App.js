import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}