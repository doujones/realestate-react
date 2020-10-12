import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
        <Route path='/'>
        <Navigation/>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
