import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';

import './App.css';
import CustomerList from './components/CustomerList/CustomerList';
import AddNewCustomer from './components/AddNewCustomer/AddNewCustomer';

const App = () => {
  
  return (
    <HashRouter>
    <div>
      <div className="title">
        <h2>Customer Portal</h2>
      </div>
      <div>
        <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/customer/create">New Customer</NavLink></li>
        </ul>
      </div>
      <div className="content">
        <Route path="/" component={CustomerList} exact />
        <Route path="/customer/create" component={AddNewCustomer} />
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
