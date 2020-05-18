import React, {useState} from 'react';
import { LinkedList } from './index';
import Jdenticon from 'react-jdenticon';

function Cards (props) {
    // initialize
    const cardsDiv = [];
    var activeClass = '';

    var temp = new LinkedList();
    temp.head = props.list.head;
    temp.tail = props.list.tail;
    temp.length = props.list.length;
    temp.active = props.list.active;
    temp.total = props.list.total;

    if (props.list.head) {
        var currentCard = temp.head;
        if (currentCard===temp.active) {activeClass = "activeCard"} ;
        cardsDiv.push(
            <div className={"nodeCard "+activeClass}>
                <Jdenticon size="80" value={currentCard.name+currentCard.str}/>
                {currentCard.name}<br/>
                {currentCard.str}
            </div>
        );
        activeClass = '';
        var lastCard = currentCard;
        for (var x = 1; x < temp.length; x++) {
            currentCard = lastCard.next
            if (currentCard===temp.active) {activeClass = "activeCard"} ;
            cardsDiv.push(
                <div className={"nodeCard "+activeClass}>
                    <Jdenticon size="80" value={currentCard.name+currentCard.str}/>
                    {currentCard.name}<br/>
                    {currentCard.str}
                </div>
            );
            lastCard = currentCard;
            activeClass = '';
        }
    }
    
    if (props.list.length>0) {
        return ( 
                <div className="cardContainer">
                    {cardsDiv}
                    {/* {props.list.active.name} */}
                </div>
        )
            
    } else {
        return (
            <div>
            
            </div>
        )
    }
}
export { Cards };