import React, { useContext } from 'react';
import {GlobalContext}  from './globalState';
import Transaction from './transaction';

const TransactionHistory = () => {

    const { transaction } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transaction.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    );
}

export default TransactionHistory ;