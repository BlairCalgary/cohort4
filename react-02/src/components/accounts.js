import React from 'react'
import AccountList from './accountlist.js'
import AccountMgmt from './accountmgmt.js'
import Tools from './tools.js'
import Amount from './amount.js'
import { Account } from './account.js';
import { AccountController } from './account.js';


class Accounts extends React.Component {
    constructor() {
        super();
        this.state = {
            accounts: [
                {
                    "name": "Chequing",
                    "balance": 25.00,
                },
            ],
            error: '',
        }
    }
    addAcct = (acct) => {
        const acctsClone = [...this.state.accounts];
        acctsClone.push({ "name": acct.name, "balance": acct.balance })
        this.setState({ accounts: acctsClone });
    }
    removeAcct = (acctName) => {
        const acctsClone = [...this.state.accounts];
        let index = acctsClone.findIndex(x => x.name === acctName);
        if (acctsClone[index].balance > 0) {
            this.errorMsg('Account balance must be zero.')
        } else {
            if (acctsClone.length > 1) {
                acctsClone.splice(index, 1);
                this.setState({ accounts: acctsClone });
            } else {
                this.errorMsg('Cannot close all accounts.')
            }
        }

    }
    deposit = (account, amount) => {
        const acctsClone = [...this.state.accounts];
        let index = acctsClone.findIndex(x => x.name === account);
        if (index < 0) {
            this.errorMsg('Select an account')
            return;
        }
        if (amount > 0) {
            const tempRecord = acctsClone[index];
            tempRecord.balance = ((tempRecord.balance * 100) + (amount * 100)) / 100;
            acctsClone[index] = tempRecord;
            this.setState({ accounts: acctsClone });
        } else {
            this.errorMsg('Enter a positive amount')
        }
    }
    withdraw = (account, amount) => {
        const acctsClone = [...this.state.accounts];
        let index = acctsClone.findIndex(x => x.name === account);
        if (index < 0) {
            this.errorMsg('Select an account')
            return;
        }
        if (amount > 0) {
            const tempRecord = acctsClone[index];
            
            // Write your non-negative conditional test here.

            tempRecord.balance = ((tempRecord.balance * 100) - (amount * 100)) / 100;
            acctsClone[index] = tempRecord;
            this.setState({ accounts: acctsClone });
        } else {
            this.errorMsg('Enter a positive amount')
        }
    }
    errorMsg = (errtxt) => {
        this.setState({ error: errtxt });
        setTimeout(() => { this.setState({ error: '' }) }, 2000)
    }

    render() {
        return (
            <div id="container">
                <div id="left" className="divBorder">
                    <AccountList accounts={this.state.accounts} removeAcct={this.removeAcct} />
                    <AccountMgmt addAcct={this.addAcct} errorMsg={this.errorMsg} />
                    <Tools accounts={this.state.accounts} />
                </div>
                <div id="actionPanel" className="divBorder">
                    <Amount withdraw={this.withdraw} deposit={this.deposit} accounts={this.state.accounts} errorMsg={this.errorMsg} error={this.state.error} />
                </div>
            </div>
        )
    }
}

export default Accounts;