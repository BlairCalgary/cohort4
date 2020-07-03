import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';

class AccountMgmt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', balance: '' }
    }
    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    balanceChange = (event) => {
        this.setState({ balance: event.target.value })
    }
    handleSubmit = () => {
        if (this.state.name !== '') {
            this.props.addAcct(this.state);
        } else {
            this.props.errorMsg('Enter Account Name')
        }
        this.setState({ name: '', balance: '' })
    }
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark; return (
                    <div className="divBox" style={{background: theme.bg}}>
                        <span id="idAccount">Account Management</span><br />
                        <button onClick={this.handleSubmit} className="btn">Open Account</button>
                        <input name="acctName" value={this.state.name} onChange={this.nameChange} type="text" placeholder="New account name"></input>
                        <input name="acctBal" value={this.state.balance} onChange={this.balanceChange} type="number" placeholder="Starting balance"></input>
                    </div>
                )
            }}
            </ThemeContext.Consumer>

        )
    }
}

export default AccountMgmt