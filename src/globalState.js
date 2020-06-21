import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const initialState = {
    transaction: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }); 
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    return (
        <GlobalContext.Provider value={
            {
                transaction: state.transaction,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}