class ListNode {
    constructor(name, strength) {
        this.name = name;
        this.str = strength 
        this.prev = null;
        this.next = null;
        this.key = String(Date.now()+strength);
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.active = null;
        this.total = 0;
    }
    push(name, strength) {
        let node = new ListNode(name, strength);
        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.active = node;
            this.total+=Number(strength);
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
            this.total+=Number(strength);
        }
        this.length++;
    }
    // pop = remove tail node from linked list
    pop() {
        if(!this.head) return undefined;
        let temp = this.tail;

        if(this.length === 1) {
            this.total-=Number(temp.str);
            this.head = null;
            this.tail = null;
            this.active = null;

        } else {
            // console.log('temp.strength: ', this.tail.str);
            this.total-=Number(temp.str);
            this.tail = temp.prev;
            this.tail.next = null;
            if (this.active===temp) {
                this.active=temp.prev;
            }
            temp.prev = null;
        }
        this.length--;
    }
    // unshift = add node to front of linked list
    unshift(name, strength) {
        let node = new ListNode(name, strength);
        if(!this.head) {
            this.total+=Number(strength);
            this.head = node;
            this.tail = node;
            this.active = node;
        } else {
            let temp = this.head;
            this.total+=Number(strength);
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
    }
    // shift = remove head node from the linked list
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.total-=Number(temp.str);
            this.head = null;
            this.tail = null;
            this.active = null;
        } else {
            if (this.active===temp) {
                // console.log('in shift');
                // console.log(temp.next);
                this.active=temp.next;
            }
            this.total-=Number(temp.str);
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
    }
    next() {
        if(!this.active) return undefined;
        if (this.length===1) {
            return undefined;
        } else {
            if (this.active!==this.tail) {
                this.active=this.active.next;
            } else {
                this.active=this.head;
            }
        }
    }
    prev() {
        if(!this.active) return undefined;
        if (this.length===1) {
            return undefined;
        } else {
            if (this.active!==this.head) {
                this.active=this.active.prev;
            } else {
                this.active=this.tail;
            }
            
        }
    }
    insert(name, strength) {
        if(!this.head) {
            this.push(name, strength);
            return;
        }
        if (this.tail===this.active) {
            this.push(name, strength);
            return;
        }
        let node = new ListNode(name, strength);
        const temp = this.active.next;
        const tempAct = this.active;
        this.total+=Number(node.str);
        temp.prev=node;
        node.next=temp;
        node.prev=tempAct;
        tempAct.next=node;
        this.length++;
    }
    first() {
        this.active=this.head;
    }
    last() {
        this.active=this.tail;
    }
    delete() {
        if(!this.head) return undefined; // Fail
        if(this.active===this.head) { // Fail
            this.shift();
            return;
        }
        if(this.active===this.tail) { 
            this.pop();
            return;
        }
        
        // const temp = this.active;
        const tempPrev = this.active.prev;
        const tempNext = this.active.next;
        this.total-=Number(this.active.str);
        tempPrev.next = tempNext;
        tempNext.prev = tempPrev;
        this.active = tempPrev;
        this.length--;
    }
    total() {
        return this.total;
    }
}


export { ListNode , LinkedList };