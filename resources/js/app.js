
require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';
import CreateExpense from './components/Per_page';
import Login from './components/Login';
import Regis from './components/Regis';
import ViewUserDetails from "./components/Userdetail";

render(
  <Router history={browserHistory}>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/dang-nhap" component={Login} />
      <Route path="/dang-ky" component={Regis} />
      <Route path="/personal-page" component={CreateExpense} />
      <Route
              path="/userdetail/:id"
              component={ViewUserDetails}
            />
      <Route path="/edit/:id" component={EditItem} />
      </Routes>
    </Router>,
  
        document.getElementById('example'));

      