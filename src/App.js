import React from 'react';
import './App.css';
import { Header } from './header';
import { Balance } from './balance';
import { AccountSummary } from './accountSummary';
import { TransactionHistory } from './transactionHistory';
import { AddTransaction } from './addTransaction';
import { GlobalProvider } from './globalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
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
