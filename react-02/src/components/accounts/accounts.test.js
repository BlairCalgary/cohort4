import React from 'react';
import { fireEvent, render, screen, act } from "@testing-library/react";
import Accounts from './accounts';
// import {AccountController} from './accounts';

// jest.mock('./accounts');

// beforeEach(() => {
//     Accounts.mockClear();
// })

// test('test', () => {
//     const spy = jest.spyOn(Accounts, 'errorMsg');
//     const errMsg = Accounts.errorMsg();

//     expect(spy).toHaveBeenCalled(1);
//     expect(errMsg).toBe("");
    
// });

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
    const account = new Accounts();
    expect(account.state.accounts[0].name).toBe('Chequing');
    expect(account.state.accounts[0].balance).toBe(25);
    
    const saving = {"name":"Saving","balance":100};
    jest.mock('./accounts');
    account.addAcct(saving);
    expect(account.addAcct).toHaveBeenCalledTimes(1);
    
    
    
});

test('test the error message', () => {
    const account = new Accounts();
    expect(account.state.error).toBe("");
    account.errorMsg("test");
    expect(account.state.error).toBe("test");
    
});

test('remove account', () => {
    const acctCtrl = new AccountController();
    const account = new Account('Chequing', 25);
    acctCtrl.addAcct(account);
    expect(acctCtrl.accts.length).toBe(1);
    acctCtrl.removeAcct('chq');
    expect(acctCtrl.accts.length).toBe(0);
});

test('total, maximum and minimum of account balances', () => {
    const acctCtrl = new AccountController();
    const chqAcct = new Account('chq', 25);
    const savAcct = new Account('sav', 100);
    acctCtrl.addAcct(chqAcct);
    expect(acctCtrl.totalAccts()).toBe(25);
    acctCtrl.addAcct(savAcct);
    expect(acctCtrl.totalAccts()).toBe(125);
    expect(acctCtrl.acctMax()).toBe('sav - 100');
    expect(acctCtrl.acctMin()).toBe('chq - 25');
});

// test('test React accounts component', async () => {
//     const myAccounts = jest.fn();
//     render(<Tools />);
//     // console.log(accounts.account);
//     screen.debug()
// });
