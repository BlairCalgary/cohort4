import React, {useState} from 'react'

function Options(props) {
    return (
        <option>{props.name}</option>
    )
}
function Deposit(props) {

    return (
        <button
            id="depositBtn"
            className="btn"
            onClick={() => props.deposit(props.select,props.input)}>
                Deposit
        </button>
    )
}

function Withdraw(props) {
    return (
        <button
            id="withdrawBtn"
            className="btn"
            onClick={() => props.withdraw(props.select,props.input)}>
                Withdraw
        </button>
    )
}



function Amount (props) {
        const [ input , setInput ] = useState('');
        const [ select, setSelect ] = useState('');
        // console.log('this.accounts:'+props.accounts);
        const accts = props.accounts.slice();
        return(
            <div className="divBox">
                <span id="amount">Amount</span>
                <input id="amtInput" type="number" onChange={e => setInput(e.target.value)}/><br/>
                <output id="errMsg" className="error">{props.error}</output><br/>
                <select onChange={(e) => setSelect(e.target.value)} defaultValue= "" id="accountList" name="accountList">
                <option>Please select</option>
                {
                    accts.map((acct, i) => {
                        return (
                            <Options
                                key={i}
                                name={accts[i].name}
                                // click={props.removeAcct}
                            />
                        );
                    })
                }
                </select><br/>
                <Deposit select={select} deposit={props.deposit} input={input}/>
                <Withdraw select={select} withdraw={props.withdraw} input={input}/>
                
                
            </div>
        )
    
    
}

export default Amount