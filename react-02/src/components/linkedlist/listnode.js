import React, { useState } from 'react';

function ListNode(props) {
    const [name, setName] = useState(props.node.name);
    const [strength, setStrength] = useState(props.node.str);
    
    return(
        <div>
            <label name="nodeName">{name}</label>
            <label name="nodeStr">{strength}</label>
        </div>
    )
}

export default ListNode