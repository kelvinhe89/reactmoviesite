import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movie from './components/Movie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>          
          <Route path="/movie/:name">
            <Movie />
          </Route>
          <Route path="/">
            <Home />            
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
