import React, { useState, useEffect } from 'react';
import { Switch } from './switch.js';
import { Card } from './card.js';
import { FifoDisplay } from './fifodisplay.js';
import { ItemNode, Styles, Fifo, Lifo } from './fifo.js'
import { ThemeContext } from '../theme/ThemeContext';
import About from './about.js'
import './queue.css';
const styles = new Styles();

function Queue() {
    const [toBeAdded, setToBeAdded] = useState({});
    const [fifo, setFifo] = useState(new Fifo());
    const [lifo, setLifo] = useState(new Lifo());
    const [deleted, setDeleted] = useState({});
    const [fifoActive, setFifoActive] = useState(true);

    const toggle = () => {
        setFifoActive(!fifoActive)
    }

    const addItem = () => {
        if (fifoActive) {
            const temp = new Fifo();
            temp.items = [...fifo.items];
            temp.new = fifo.new;
            temp.enqueue(toBeAdded);
            setFifo(temp);
        } else {
            const temp = new Lifo();
            temp.items = [...lifo.items];
            temp.new = lifo.new;
            temp.enqueue(toBeAdded);
            setLifo(temp);
        }
        const newItem = new ItemNode(styles.getStyle());
        setToBeAdded(newItem);
    }

    const deleteItem = () => {
        if (fifoActive) {
            if (fifo.items.length) {
                const temp = new Fifo();
                temp.items = [...fifo.items];
                temp.new = fifo.new;
                var trashed = temp.dequeue();
                setFifo(temp);
                setDeleted(trashed);
            }
        } else {
            if (lifo.items.length) {
                const temp = new Lifo();
                temp.items = [...lifo.items];
                temp.new = lifo.new;
                var trashed = temp.dequeue();
                setLifo(temp);
                setDeleted(trashed);
            }
        }

        // const newItem = new ItemNode(styles.getStyle());
        // setToBeAdded(newItem);
    }

    useEffect(() => {
        // const styles = new Styles();
        const newItem = new ItemNode(styles.getStyle());
        setToBeAdded(newItem);

    }
        , []);

    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark, toggleTheme } = context;
            const theme = isLightTheme ? light : dark;


            return (
                <div>
                    <div className="q-divBorder" style={{ background: theme.ui }}>
                        <div className="q-control" style={{ background: theme.bg }}>
                            <Switch
                                add={addItem}
                                delete={deleteItem}
                                fifoActive={fifoActive}
                                setFifoActive={setFifoActive}

                            />
                        </div>
                        <div className="q-queues q-control" style={{ background: theme.bg }}>
                            <div className="q-elBorder">
                                To Be Added
                                <Card item={toBeAdded} />
                                {/* {toBeAdded.name} */}
                            </div>
                            <div className="q-elBorder">
                                Last Deleted
                                <Card item={deleted} />
                            </div>
                            <div className="q-arrow">
                                ⬇
                            </div>
                            <div className="q-arrow">
                                ↕
                            </div>
                            <div className="q-stack">
                                <div className="q-leftwall">

                                </div>
                                <div>
                                    <FifoDisplay fifo={fifo} />
                                </div>
                                <div className="q-rightwall">

                                </div>
                            </div>
                            <div className="q-stack">
                                <div className="q-leftwall">

                                </div>
                                <div className="q-bottom">
                                    <FifoDisplay fifo={lifo} />
                                </div>
                                <div className="q-rightwall">

                                </div>
                            </div>
                            <div className="q-arrow">
                                ⬇
                            </div>
                            <div>

                            </div>
                            <div className="q-labels">
                                FIFO
                            </div>
                            <div className="q-labels">
                                LIFO
                            </div>
                        </div>
                    </div>
                    <div>
                        <About/>
                    </div>
                </div>

            )
        }}
        </ThemeContext.Consumer>
    );
}

export { Queue }