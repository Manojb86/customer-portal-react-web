import React from 'react';
import './App.css';
import CustomerList from './components/CustomerList/CustomerList';

const App = () => {
  return (
    <div>
      <div>
      <h2>Customer Portal</h2>
      </div>
      <div>
        <a href="#">Create New Customer</a>
      </div>
      <br></br>
      <div>
         <CustomerList />
      </div>
    </div>
  );
}

export default App;
