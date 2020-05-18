import React, {useState} from 'react';

function CardSelection (props) {
    return (
        <div className="cardSelect">
            <strong>Card Selection:</strong><br/>
            <div className="horiz">
            <button className="btn" onClick={props.first}>First</button>
            <button className="btn" onClick={props.prev}>Prev</button>
            <button className="btn" onClick={props.delete}>Delete</button>
            <button className="btn" onClick={props.next}>Next</button>
            <button className="btn" onClick={props.last}>Last</button>
            </div>
        </div>
    )
}
export { CardSelection };