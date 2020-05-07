import React from 'react'

function AccountBuild(props) {
    const balance = Number(props.balance).toFixed(2)
    return(
        <div key={props.index}>
            <div className="Card" >
                <span id="acctName">{props.name}</span>
                <span id="balOutput" className="balOutput">{balance}</span>
                <button id="closeAcct" name={props.name} className="closeAcct btn" onClick={() => props.click(props.name)}>Close Acct</button>
            </div>
        </div>
    )
}

function AccountList(props) {
    const accts = props.accounts.slice();
    console.log('accts in AccountList: '+ accts[0].name);
    return(
        <div className="divBox">
            <output id="account">Account Balances</output><br/>
            {
                accts.map((acct, i) => {
                    return (
                        <AccountBuild
                            key={i}
                            name={accts[i].name}
                            balance={accts[i].balance}
                            click={props.removeAcct}
                        />
                    );
                })
            }
        </div>
    )
}

export default AccountList