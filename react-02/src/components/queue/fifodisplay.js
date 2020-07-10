import React from 'react';
import { Card } from './card.js';

function FifoDisplay(props) {
    const items = [...props.fifo.items].reverse();
    return(
        <div className="cardWrap">
            {items.map(function(object,i) {
                return <Card key={object.key} item={object}/>
            })
            }
        </div>
    )
}

export { FifoDisplay }