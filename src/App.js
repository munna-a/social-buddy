import React from 'react';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/more/:userId">
            <PostDetails/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="*">
              <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
