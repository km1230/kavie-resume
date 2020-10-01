import React from 'react';
import '../static/css/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
