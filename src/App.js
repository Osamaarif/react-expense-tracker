import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import { Balance } from './balance';
import { AccountSummary } from './accountSummary';
import { TransactionHistory } from './transactionHistory';
import { AddTransaction } from './addTransaction';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
