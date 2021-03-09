import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailWork from '../components/Detail/DetailWork';
import Layout from '../components/Layout';
// containers
import { Home, About, Works, NotFound, Experiments } from '../containers/index';
import AppProvider from '../context/AppContext';

// styles
import 'swiper/swiper.scss';
import '../styles/app.scss';
import DetailExperiments from '../components/Experiments/DetailExperiments';

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
            <Route
              exact
              path='/experiments/:id'
              component={DetailExperiments}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
