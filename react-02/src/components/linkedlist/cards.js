import React, {useState} from 'react';

function Cards (props) {
    if (props.list.length>0) {
        return (
            <div>
                {props.list.active.name}
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