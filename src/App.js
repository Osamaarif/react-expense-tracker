import React from 'react';
import './App.css';
import Balance from './balance';
import AccountSummary from './accountSummary';
import TransactionHistory  from './transactionHistory';
import AddTransaction  from './addTransaction';
import {GlobalProvider} from './globalState';

function App() {
  return (
    <GlobalProvider>
      <h1>React Expenses Tracker by Osama Arif</h1>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
