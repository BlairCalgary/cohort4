import React, { useState, useEffect } from 'react';
import { Cards } from './cards.js';
import { UserInput } from './userinput.js';
import { CardSelection } from './cardselection.js';
import { LinkedList } from './index';
import { ThemeContext } from '../theme/ThemeContext';
import About from './about.js'

// Using JDENTICON
// 
// https://www.npmjs.com/package/react-jdenticon

function LinkedListComp() {
    const [linkedlist, setLL] = useState(new LinkedList());
    // useEffect(()=>{
    //     setLL(new LinkedList());
    // });
    const updateState = () => {
        const temp = new LinkedList();
        temp.head = linkedlist.head;
        temp.tail = linkedlist.tail;
        temp.length = linkedlist.length;
        temp.active = linkedlist.active;
        temp.total = linkedlist.total;
        setLL(temp);
    }
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "../../node_modules/jdenticon/dist/jdenticon.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    const add = (userName, userStr) => {
        linkedlist.insert(userName, userStr);
        updateState();
    }
    const next = (event) => {
        linkedlist.next();
        updateState();
        event.preventDefault();
    }
    const prev = (event) => {
        linkedlist.prev();
        updateState();
        event.preventDefault();
    }
    const first = (event) => {
        linkedlist.first();
        updateState();
        event.preventDefault();
    }
    const last = (event) => {
        linkedlist.last();
        updateState();
        event.preventDefault();
    }
    const deleteCard = (event) => {
        linkedlist.delete();
        updateState();
        event.preventDefault();
    }

    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;


            return (
                <div>
                    <div>
                        <div className="divBorder justCont" style={{ background: theme.ui }}>
                            <UserInput
                                add={add}
                            />
                            <CardSelection
                                first={first}
                                next={next}
                                prev={prev}
                                last={last}
                                delete={deleteCard}
                            />
                            {/* Linked List{linkedlist.length} */}
                            {/* <button onClick={()=>add()}/>
                <button onClick={()=>next()}/>
                <button onClick={()=>console.log(linkedlist.active.name)}/> */}
                        </div>
                        <div className="justCont">
                            <Cards list={linkedlist} />
                            {/* length={linkedlist} */}
                        </div>
                    </div>
                    <div>
                        <About/>
                    </div>
                </div>

            )
        }}
        </ThemeContext.Consumer>
    )
}

export { LinkedListComp };

