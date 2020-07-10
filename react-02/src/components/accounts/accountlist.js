import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';

function AccountBuild(props) {
    const balance = Number(props.balance).toFixed(2)
    return(
        <div key={props.index}>
            <div className="Card" style={{display: 'flex', flexDirection: 'row'}}>
                <span id="acctName">{props.name}</span>
                <span id="balOutput" className="balOutput">{balance}</span>
                <button id="closeAcct" name={props.name} className="closeAcct btn" onClick={() => props.click(props.name)}>Close Acct</button>
            </div>
        </div>
    )
}

function AccountList(props) {
    const accts = props.accounts.slice();
    // console.log('accts in AccountList: '+ accts[0].name);
    return(
        <ThemeContext.Consumer>{(context) => {
            const {isLightTheme,light,dark} = context;
            const theme = isLightTheme ? light : dark;
            
            return(
                <div className="divBox" style={{background: theme.bg}}>
                    <output id="account">Account Balances</output><br/>
                    {
                        accts.map((acct) => {
                            return (
                                <AccountBuild
                                    key={acct.key}
                                    name={acct.name}
                                    balance={acct.balance}
                                    click={props.removeAcct}
                                />
                            );
                        })
                    }
                </div>  
            )
            }}            
        </ThemeContext.Consumer>
        
    )
}

export default AccountList