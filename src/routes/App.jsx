import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// containers
import { Home, About, Works, NotFound } from '../containers/index';

// styles
import '../styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/works" component={Works} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
