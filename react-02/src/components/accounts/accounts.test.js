import React from 'react';
import { fireEvent, render, screen, act } from "@testing-library/react";
import Accounts from './accounts';


test('test the constructor', () => {
    const account = new Accounts();
    expect(account.state.accounts[0].name).toBe('Chequing');
    expect(account.state.accounts[0].balance).toBe(25);
    
});

test('does deposit increment balance?', () => {
    const account = new Accounts();
    expect(account.state.accounts[0].balance).toBe(25);
    account.deposit('Chequing',10);
    expect(account.state.accounts[0].balance).toBe(35);
    account.deposit('Chequing',10);
    expect(account.state.accounts[0].balance).toBe(45);
});

test('does withdraw decrement balance?', () => {
    const account = new Accounts();
    expect(account.state.accounts[0].balance).toBe(25);
    account.withdraw('Chequing',10);
    expect(account.state.accounts[0].balance).toBe(15);
    account.withdraw('Chequing',10);
    expect(account.state.accounts[0].balance).toBe(5);
});

test('does addAcct add account', () => {
    return
    
});

test('test the error message', () => {
    return
    
});

test('remove account', () => {
    return
});

test('total, maximum and minimum of account balances', () => {
    return
});


