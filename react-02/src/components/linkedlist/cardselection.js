import React, {useState} from 'react';
import previous from './previous.svg';
import rewind from './rewind.svg';
import skip from './skip.svg';
import ffwd from './ffwd.svg';
import trash from './garbage.svg'

function CardSelection (props) {
    return (
        <div className="cardSelectWrap">
            <div className="cardSelect">
                <strong>Card Selection:</strong><br/>
                <div className="horiz">
                <button className="btnNav" onClick={props.first}><img src={previous} alt="first" className="btnSVG"/></button>
                <button className="btnNav" onClick={props.prev}><img src={rewind} alt="previous" className="btnSVG" /></button>
                <button className="btnNav" onClick={props.delete}><img src={trash} alt="delete" className="btnSVG" /></button>
                <button className="btnNav" onClick={props.next}><img src={ffwd} alt="next" className="btnSVG"/></button>
                <button className="btnNav" onClick={props.last}><img src={skip} alt="last" className="btnSVG"/></button>
                </div>
            </div>
        </div>
    )
}
export { CardSelection };