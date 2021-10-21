import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Components/Home/Home';
import Navbar from './Components/Layout/Navbar';
import Sidebar from './Components/Layout/Sidebar';
import Exams from './Components/Home/Exams';
import Dashboard from './Components/Home/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Sidebar />
   
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/exam' component={Exams} /> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
