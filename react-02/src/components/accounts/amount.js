import React, {useState} from 'react'
import { ThemeContext } from '../theme/ThemeContext';

function Options(props) {
    return (
        <option value={props.value}>{props.name}</option>
    )
}
function Deposit(props) {
    return (
        <button
            id="depositBtn"
            className="btn"
            onClick={(e) => {
                props.deposit(props.selectedIndex,props.input)}}>
                Deposit
        </button>
    )
}

function Withdraw(props) {
    return (
        <button
            id="withdrawBtn"
            className="btn"
            onClick={() => props.withdraw(props.selectedIndex,props.input)}>
                Withdraw
        </button>
    )
}



function Amount (props) {
        const [ input , setInput ] = useState('');
        const [ selectedIndex, setSelectedIndex ] = useState('');
        const accts = props.accounts.slice();
        return(
            <ThemeContext.Consumer>{(context) => {
                const {isLightTheme,light,dark} = context;
                const theme = isLightTheme ? light : dark;
                
                return(
            <div className="divBox" style={{background: theme.bg}}>
                <span id="amount">Amount</span>
                <input id="amtInput" type="number" onChange={e => setInput(e.target.value)}/><br/>
                <output id="errMsg" className="error">{props.error}</output><br/>
                <select onChange={(e) => {
                    setSelectedIndex(e.target.value);
                    }} defaultValue="" id="accountList" name="accountList">
                <option>Please select</option>
                {
                    accts.map((acct) => {
                        return (
                            <Options
                                value={acct.key}
                                key={acct.key}
                                name={acct.name}
                                // click={props.removeAcct}
                            />
                        );
                    })
                }
                </select><br/>
                <Deposit selectedIndex={selectedIndex} deposit={props.deposit} input={input}/>
                <Withdraw selectedIndex={selectedIndex} withdraw={props.withdraw} input={input}/>
                
                
            </div>
        )}}            
        </ThemeContext.Consumer>
        
    )
    
    
}

export default Amount