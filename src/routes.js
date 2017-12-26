import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Home from './components/Home';
import HistoryAndGeography from './components/HistoryAndGeography';
import Citizenship from './components/Citizenship';
import Mathematics from './components/Mathematics';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Main} >
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/gallery' component={Gallery} />
    <Route path='/courses' component={Courses} />
    <Route path='/historyandgeography' component={HistoryAndGeography} />
    <Route path='/citizenship' component={Citizenship} />
    <Route path='/mathematics' component={Mathematics} />
    	
    	<IndexRoute component={Home}/>
    </Route>
  
  </Router>
);

export default Routes;
