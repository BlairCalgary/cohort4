import React from 'react';
import { fireEvent, render, screen, act } from "@testing-library/react";
import {Account} from './account';
import {AccountController} from './account';
import {Tools} from './tools.js'

test('test the constructor', () => {
    const account = new Account('Chequing', 25);
    expect(account.name).toBe('Chequing');
    expect(account.balance).toBe(25);
});

test('does deposit increment balance?', () => {
    const account = new Account('Chequing', 25);
    account.deposit(10);
    expect(account.balance).toBe(35);
    account.deposit(10);
    expect(account.balance).toBe(45);
});

test('does withdraw decrement balance?', () => {
    const account = new Account('Chequing', 25);
    account.withdraw(10);
    expect(account.balance).toBe(15);
    account.withdraw(10);
    expect(account.balance).toBe(5);
});

test('test the constructor', () => {
    const acctCtrl = new AccountController();
    const account = new Account('Chequing', 25);
    expect(acctCtrl.accts.length).toBe(0);
    acctCtrl.addAcct(account);
    expect(acctCtrl.accts.length).toBe(1);
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
