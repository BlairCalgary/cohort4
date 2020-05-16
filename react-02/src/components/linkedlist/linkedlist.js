import React, {useState,useEffect} from 'react';
import { Cards } from './cards.js';
import { LinkedList } from './index';

const linkedlistVar = new LinkedList();
// const [ linkedlist, setLL ] = useState (new LinkedList());

function LinkedListComp () {
    const [ linkedlist, setLL ] = useState (new LinkedList());
    // useEffect(()=>{
    //     setLL(new LinkedList());
    // });
    const add = () => {
        linkedlist.push(`Blair`+linkedlist.length,11);
        const temp = new LinkedList();
        temp.head = linkedlist.head;
        temp.tail = linkedlist.tail;
        temp.length = linkedlist.length;
        temp.active = linkedlist.active;
        temp.total = linkedlist.total;
        setLL(temp);
    }
    const next = () => {
        linkedlist.next();
        const temp = new LinkedList();
        temp.head = linkedlist.head;
        temp.tail = linkedlist.tail;
        temp.length = linkedlist.length;
        temp.active = linkedlist.active;
        temp.total = linkedlist.total;
        setLL(temp);
    }
    return (
        <div>
            Linked List{linkedlist.length}
            <button onClick={()=>add()}/>
            <button onClick={()=>next()}/>
            <button onClick={()=>console.log(linkedlist.active.name)}/>
            <Cards list={linkedlist}/>
             {/* length={linkedlist} */}
        </div>
    )
}

export { LinkedListComp };

