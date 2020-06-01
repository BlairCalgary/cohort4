import React, { useState } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

function UserInput(props) {
    const [userName, setUserName] = useState("");
    const [userStr, setUserStr] = useState("");
    // const [ disabled, setDisabled] = useState (true);
    const handleClick = (event) => {
        props.add(userName, userStr);
        setUserName("");
        setUserStr("");
        event.preventDefault();
    }
    const predefClick = (event) => {
        const predefNode1 = { name: 'Cantor', str: 45 }
        const predefNode2 = { name: 'Gauss', str: 77 }
        const predefNode3 = { name: 'Noether', str: 82 }

        const predef = [predefNode1, predefNode2, predefNode3];
        props.add(predef[0].name, predef[0].str);
        props.add(predef[1].name, predef[1].str);
        props.add(predef[2].name, predef[2].str);
        setUserName("");
        setUserStr("");
        event.preventDefault();
    }
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark, toggleTheme } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <div className="divBox minwidth" style={{ background: theme.bg }}>
                    <form id="cityInput">
                        <strong>Card Creator:</strong><br />
                        <div className="horiz">
                            <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div><br />
                        <div className="horiz">
                            <label>Strength:</label>
                            <input
                                type="number"
                                name="strength"
                                value={userStr}
                                onChange={e => setUserStr(e.target.value)}
                            />
                        </div><br />
                        <button
                            className="btnWide"
                            onClick={event => handleClick(event)}
                            // onClick={event => props.add(event, userName, userStr)}
                            disabled={!userName || !userStr}
                        >
                            Add After Selected Card
                    </button><br />
                        <button
                            className="btnWide"
                            onClick={event => predefClick(event)}
                        >Load Predefined Cards</button>
                    </form>

                </div>
            )
        }}
        </ThemeContext.Consumer>

    )
}
export { UserInput };