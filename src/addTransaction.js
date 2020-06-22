import React, { useState, useContext } from 'react';
import {GlobalContext} from './globalState';

const AddTransaction = () => {

    const [ description, setDescription ]=useState('');
    const [ transactionAmount, setTransactionAmount ]=useState('');
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Detail of Transaction"
                            required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">
                        Transaction Amount
                    </label>
                    <input  type="number"
                            id="transactionAmount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="Dollar value of Transaction"
                            required="required"        
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction ;