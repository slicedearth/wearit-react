// PACKAGE IMPORTS
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// CUSTOM IMPORTS
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter.js';
import Status from './components/Status';
import NotFound from './components/NotFound';
import Layout from './components/layout/Layout';
import NavigationBar from './components/layout/NavigationBar';
import Jumbotron from './components/layout/Jumbotron';

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
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
      </Layout>
    </Fragment>
  );
};

export default App;
