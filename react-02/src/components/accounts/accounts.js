import React from 'react'
import AccountList from './accountlist.js'
import AccountMgmt from './accountmgmt.js'
import Tools from './tools.js'
import Amount from './amount.js'
import { ThemeContext } from '../theme/ThemeContext';

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
        this.errorMsg = this.errorMsg.bind(this)
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
            const newBalance = ((tempRecord.balance * 100) - (amount * 100)) / 100;
            if (newBalance < 0) {
                this.errorMsg('Account cannot be negative.')
                // Write your non-negative conditional test here.
            } else {

                tempRecord.balance = ((tempRecord.balance * 100) - (amount * 100)) / 100;
                acctsClone[index] = tempRecord;
                this.setState({ accounts: acctsClone });

            }
        } else {
            this.errorMsg('Enter a positive amount')
        }
    }
    errorMsg = (errtxt) => {
        this.setState({ error: errtxt });
        setTimeout(() => { this.setState({ error: '' }) }, 2500)
    }

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;


                return (
                    <div id="container" >
                        <div id="left" className="divBorder" style={{background: theme.ui}}>
                            <AccountList accounts={this.state.accounts} removeAcct={this.removeAcct} />
                            <AccountMgmt addAcct={this.addAcct} errorMsg={this.errorMsg} />
                            <Tools accounts={this.state.accounts} />
                        </div>
                        <div id="actionPanel" className="divBorder" style={{background: theme.ui}}>
                            <Amount withdraw={this.withdraw} deposit={this.deposit} accounts={this.state.accounts} errorMsg={this.errorMsg} error={this.state.error} />
                        </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default Accounts;