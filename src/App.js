import React from 'react';
import Home from './Home/index';
import Orders from './Orders/index';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/orders/saved">
          <Orders state="saved" />
        </Route>

        <Route exact path="/orders/validated">
          <Orders state="validated" />
        </Route>

        <Route exact path="/orders/shipped">
          <Orders state="shipped" />
        </Route>

        <Route exact path="/orders/delivered">
          <Orders state="delivered" />
        </Route>

      </Router>
    </div>
  );
}

export default App;
