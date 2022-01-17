
require('./bootstrap');

require('./components/Example');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Example from './components/Example';
import Home from './components/Home';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';

render(
  <Router history={browserHistory}>
      <Route exact path="/" component={Home} />
      <Route path="/add-item" component={CreateItem} />
      <Route path="/display-item" component={DisplayItem} />
      <Route path="/edit/:id" component={EditItem} />
    </Router>,
        document.getElementById('example'));

      