import {Account} from './account';
import {AccountController} from './account';

const account = new Account('chq', 25);

test('test the constructor', () => {
    expect(account.name).toBe('chq');
    expect(account.balance).toBe(25);
});

test('display name and balance', () => {
    expect(account.display()).toBe(25);
});

test('does deposit increment balance?', () => {
    account.deposit(10);
    expect(account.balance).toBe(35);
    account.deposit(10);
    expect(account.balance).toBe(45);
});

test('does withdraw decrement balance?', () => {
    account.withdraw(10);
    expect(account.balance).toBe(35);
    account.withdraw(10);
    expect(account.balance).toBe(25);
});

const acctCtrl = new AccountController();

test('test the constructor', () => {
    expect(acctCtrl.accts.length).toBe(0);
    acctCtrl.addAcct(account);
    expect(acctCtrl.accts.length).toBe(1);
});

test('remove account', () => {
    expect(acctCtrl.accts.length).toBe(1);
    acctCtrl.removeAcct('chq');
    expect(acctCtrl.accts.length).toBe(0);
});

test('total of account balances', () => {
    const chqAcct = new Account('chq', 25);
    const savAcct = new Account('sav', 100);
    acctCtrl.addAcct(chqAcct);
    expect(acctCtrl.totalAccts()).toBe(25);
    acctCtrl.addAcct(savAcct);
    expect(acctCtrl.totalAccts()).toBe(125);
});

test('account maximum', () => {
    expect(acctCtrl.acctMax()).toBe(100);
});

test('account minimum', () => {
    expect(acctCtrl.acctMin()).toBe(25);
});
