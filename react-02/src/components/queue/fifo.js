import beers from './styles.js';

class ItemNode {
    constructor(name) {
        this.name = name;
        this.key = String(Date.now()+name);
    }
}

class Styles {
    constructor() {
        this.styles = this.loadData();
    }
    getStyle() {
        const rando = Math.floor(Math.random() * this.styles.length)
        return this.styles[rando];
    }
    loadData(){
        const styles = [];
        for (var x = 0; x < beers.length; x++) {
            styles.push(beers[x].name);
        }
        return styles;
    };
}

class Fifo {
    constructor() {
        this.items = []
        this.new = null;
    };
    enqueue(item){
        // const newItem = new ItemNode(name);
        this.items.push(item);
        this.new = item;
    };
    dequeue(){
        if (this.items.length) {
            const temp = this.items.shift();
            if (!this.items.length) {
                this.new = null;
            }
            return temp;
        }
    };
}

class Lifo {
    constructor() {
        this.items = []
        this.new = null
    };
    enqueue(item){
        // const newItem = new ItemNode(name);
        this.items.push(item);
        this.new = item;
        
    };
    dequeue(){
        if (this.items.length) {
            const temp = this.items.pop();
            if (!this.items.length) {
                this.new = null;
            } else {
                this.new = this.items[this.items.length-1]
            }
            return temp;
        }
    };
}

export { ItemNode, Styles, Fifo, Lifo }