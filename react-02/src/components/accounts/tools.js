import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';

function TotalFundsOutput(props) {
    let total = 0;
    let i;
    for (i = 0; i < props.accounts.length; i++) {
        total += Number(props.accounts[i].balance);
    }
    total = Number(total).toFixed(2)
    return (
        <output id="totalFundsOutput" className="output" type="name">{total}</output>
    )
}

function AcctMaxOutput(props) {
    let max = 0;
    let i;
    switch (props.accounts.length) {
        case 0:
            return null;
        case 1:
            return props.accounts[0].name + ' - ' + Number(props.accounts[0].balance).toFixed(2);
        default:
            for (i = 0; i < props.accounts.length - 1; i++) {
                (props.accounts[i].balance > props.accounts[i + 1].balance ?
                    max = i :
                    max = i + 1);
            }
            return props.accounts[max].name + ' - ' + Number(props.accounts[max].balance).toFixed(2);
    }
}
function AcctMinOutput(props) {
    let min = 0;
    let i;
    switch (props.accounts.length) {
        case 0:
            return null;
        case 1:
            return props.accounts[0].name + ' - ' + Number(props.accounts[0].balance).toFixed(2);
        default:
            for (i = 0; i < props.accounts.length - 1; i++) {
                (props.accounts[i].balance < props.accounts[i + 1].balance ?
                    min = i :
                    min = i + 1);
            }
            return props.accounts[min].name + ' - ' + Number(props.accounts[min].balance).toFixed(2);
    }
}

function Tools(props) {
    console.log(props.accounts[0].name);
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark, toggleTheme } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <div className="divBox" style={{background: theme.bg}}>
                    <output id="account">Account Tools</output><br />
                    <button className="btn">Total Funds</button>
                    <TotalFundsOutput accounts={props.accounts} /><br />
                    <button className="btn">Largest Acct</button>
                    <AcctMaxOutput accounts={props.accounts} /><br />
                    <button className="btn">Smallest Acct</button>
                    <AcctMinOutput accounts={props.accounts} /><br />

                </div>
            )
        }}
        </ThemeContext.Consumer>

    )
}

export default Tools