import React, {useState} from 'react';

function Switch(props) {
    const [ fifo, setFifo ] = useState('q-switchActive');
    const [ lifo, setLifo ] = useState("");

    const toggle = () => {
        (fifo?setFifo(""):setFifo('q-switchActive'));
        (lifo?setLifo(""):setLifo('q-switchActive'));
        props.setFifoActive(!props.fifoActive)
    }

    return (
        
        <div>
            <div className="q-switchContainer">
                <div className="q-wrap" onClick={toggle}>
                    <div className={"q-switch "+fifo}>
                        FIFO
                    </div>
                    <div className={"q-switch "+lifo}>
                        LIFO
                    </div>
                </div>
            </div>
            <div>
                <div onClick={props.add} className="btn">
                    Add Item
                </div>
                <div onClick={props.delete} className="btn">
                    Delete Item
                </div>
            </div>
        </div>
    )
}

export { Switch };