import React, {useState} from 'react';

function UserInput (props) {
    return (
        <div className="divBox minwidth">
            <form id="cityInput">
                    <strong>Card Creator:</strong><br/>
                    <div className="horiz">
                        <label>Name: </label>
                        <input name="cardName"></input>
                    </div><br/>
                    <div className="horiz">
                        <label>Strength:</label>
                        <input name="cardStr"></input>
                    </div><br/>

                    <button
                        className="btnWide"
                        onClick={props.add}
                    >
                        Add After Selected Card
                    </button><br/>
                    <button className="btnWide">Load Predefined Cards</button>
                </form>
            
        </div>
    )
}
export { UserInput };