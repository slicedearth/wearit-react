// THIRD PARTY IMPORTS
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// CUSTOM IMPORTS
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Newsletter from './components/pages/Newsletter';
import Status from './components/pages/Status';
import NotFound from './components/pages/NotFound';
import NavigationBar from './components/layout/NavigationBar';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      {/* ROUTES */}
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/newsletter' component={Newsletter}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/status' component={Status}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
