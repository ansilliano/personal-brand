import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailWork from '../components/Detail/DetailWork';
import Layout from '../components/Layout';
// containers
import { Home, About, Works, NotFound, Experiments } from '../containers/index';
import AppProvider from '../context/AppContext';

// styles
import '../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import '../styles/app.scss';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/works' component={Works} />
            <Route exact path='/works/:id' component={DetailWork} />
            <Route exact path='/experiments' component={Experiments} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
