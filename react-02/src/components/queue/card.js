import React from 'react';

function Card(props) {
    const item = props.item;
    if (item.name) {
        return (
            <div className="q-elBorder q-beer">
                {item.name}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
}

export { Card }