import { ListNode , LinkedList } from './index';

test('test the listNode', () => {
    const node = new ListNode();
    node.name = "Blair";
    node.str = "11";
    expect(node.name).toBe("Blair");
    expect(node.str).toBe("11");
    expect(node).toBeInstanceOf(ListNode);
});

test('test push of LinkedList', () => {
    // instantiate control class
    const ctrl = new LinkedList;
    
    ctrl.push("Lauren",24);
    expect(ctrl.total).toBe(24);
    expect(ctrl.length).toBe(1);
    expect(ctrl.head.name).toBe("Lauren");
    expect(ctrl.active.name).toBe("Lauren");


    ctrl.push("Blair",11);
    expect(ctrl.total).toBe(35);
    expect(ctrl.length).toBe(2);
    expect(ctrl.tail.name).toBe("Blair");
    expect(ctrl.head.next.name).toBe("Blair");
    expect(ctrl.active.name).toBe("Lauren");

});

test('test pop of LinkedList', () => {
    // instantiate control class
    const ctrl = new LinkedList;
    
    ctrl.push("Lauren",24);
    ctrl.push("Blair",11);
    ctrl.push("Byron",30);
    expect(ctrl.total).toBe(65);
    expect(ctrl.length).toBe(3);
    expect(ctrl.head.next.name).toBe("Blair");
    expect(ctrl.active.name).toBe("Lauren");

    ctrl.pop();
    expect(ctrl.total).toBe(35);
    expect(ctrl.length).toBe(2);
    expect(ctrl.tail.prev.name).toBe("Lauren");
    ctrl.pop();
    expect(ctrl.total).toBe(24);
    ctrl.pop();
    expect(ctrl.total).toBe(0);
    expect(ctrl.length).toBe(0);
    expect(ctrl.active).toBe(null);

});

test('test unshift of LinkedList', () => {
    const ctrl = new LinkedList;

    ctrl.push("Lauren",24);
    expect(ctrl.total).toBe(24);
    expect(ctrl.length).toBe(1);
    expect(ctrl.active.name).toBe("Lauren");
    
    ctrl.unshift("Blair",11);
    expect(ctrl.total).toBe(35);
    expect(ctrl.length).toBe(2);
    expect(ctrl.head.name).toBe("Blair");
    expect(ctrl.head.next.name).toBe("Lauren");
    expect(ctrl.active.name).toBe("Lauren");

    ctrl.unshift("Byron",30);
    expect(ctrl.total).toBe(65);
    expect(ctrl.length).toBe(3);
    expect(ctrl.active.name).toBe("Lauren");
});

test('test shift of LinkedList', () => {
    const ctrl = new LinkedList;

    ctrl.push("Lauren",24);
    expect(ctrl.total).toBe(24);
    expect(ctrl.head.prev).toBe(null);
    expect(ctrl.head.next).toBe(null);

    ctrl.push("Blair",11);
    expect(ctrl.total).toBe(35);
    expect(ctrl.head.prev).toBe(null);
    expect(ctrl.active.next.name).toBe("Blair");

    ctrl.push("Byron",30);
    expect(ctrl.total).toBe(65);
    expect(ctrl.length).toBe(3);
    expect(ctrl.active.name).toBe("Lauren");
    expect(ctrl.head.name).toBe("Lauren");


    ctrl.shift();
    expect(ctrl.total).toBe(41);
    expect(ctrl.length).toBe(2);
    expect(ctrl.active.name).toBe("Blair");
    expect(ctrl.head.name).toBe("Blair");

    ctrl.shift();
    expect(ctrl.total).toBe(30);
    expect(ctrl.length).toBe(1);
    expect(ctrl.active.name).toBe("Byron");
    expect(ctrl.head.name).toBe("Byron");
    ctrl.shift();
    expect(ctrl.length).toBe(0);
    // expect(ctrl.active).toBe(null);
});

test('test next LinkedList', () => {
    const ctrl = new LinkedList;

    ctrl.push("Lauren",24);
    ctrl.push("Blair",11);
    ctrl.push("Byron",30);
    expect(ctrl.active.name).toBe("Lauren");
    expect(ctrl.total).toBe(65);

    ctrl.next();
    expect(ctrl.active.name).toBe("Blair");

    ctrl.next();
    expect(ctrl.active.name).toBe("Byron");

    ctrl.next();
    // Does the next  loop to the head?
    expect(ctrl.active.name).toBe("Lauren");
});

test('test next LinkedList', () => {
    const ctrl = new LinkedList;

    ctrl.push("Lauren",24);
    ctrl.push("Blair",11);
    ctrl.push("Byron",30);
    expect(ctrl.total).toBe(65);
    expect(ctrl.active.name).toBe("Lauren");
    ctrl.next();
    ctrl.next();
    expect(ctrl.active.name).toBe("Byron");
    ctrl.prev();
    expect(ctrl.active.name).toBe("Blair");
    ctrl.prev();
    expect(ctrl.active.name).toBe("Lauren");
    ctrl.prev();
    // Does the prev  loop to the tail?
    expect(ctrl.active.name).toBe("Byron");
});

test('test insert LinkedList', () => {
    
    const ctrl = new LinkedList;
    expect(ctrl.active).toBe(null);
    expect(ctrl.head).toBe(null);
    expect(ctrl.tail).toBe(null);
    expect(ctrl.length).toBe(0);

    ctrl.insert("Lauren",24)
    expect(ctrl.total).toBe(24);
    expect(ctrl.head.name).toBe("Lauren");
    expect(ctrl.active.name).toBe("Lauren");
    expect(ctrl.length).toBe(1);

    ctrl.insert("Blair",11)
    expect(ctrl.total).toBe(35);
    expect(ctrl.length).toBe(2);
    expect(ctrl.tail.name).toBe("Blair");
    expect(ctrl.active.next.name).toBe("Blair");
    expect(ctrl.tail.prev.name).toBe("Lauren");
    expect(ctrl.active.name).toBe("Lauren");

    ctrl.insert("Byron",30)
    expect(ctrl.total).toBe(65);
    expect(ctrl.tail.prev.name).toBe("Byron");
    expect(ctrl.head.next.name).toBe("Byron");
    expect(ctrl.head.name).toBe("Lauren");
    expect(ctrl.tail.name).toBe("Blair");
    expect(ctrl.length).toBe(3);
    ctrl.next();
    ctrl.insert("Dylan",30);
    expect(ctrl.total).toBe(95);
    expect(ctrl.tail.prev.name).toBe("Dylan");
    expect(ctrl.head.next.name).toBe("Byron");
    expect(ctrl.head.name).toBe("Lauren");
    expect(ctrl.tail.name).toBe("Blair");
    expect(ctrl.length).toBe(4);

});

test('test delete LinkedList', () => {
    const ctrl = new LinkedList;
    ctrl.push("Lauren",24);
    ctrl.push("Blair",11);
    ctrl.push("Byron",30);
    ctrl.push("Dylan",30);
    expect(ctrl.total).toBe(95);
    ctrl.last();
    expect(ctrl.tail.name).toBe("Dylan");
    ctrl.first();
    expect(ctrl.head.name).toBe("Lauren");
    
    ctrl.delete();
    expect(ctrl.total).toBe(71);
    expect(ctrl.head.name).toBe("Blair");
    expect(ctrl.active.name).toBe("Blair");
    expect(ctrl.length).toBe(3);

    ctrl.next();
    expect(ctrl.head.name).toBe("Blair");
    expect(ctrl.head.next.name).toBe("Byron");
    expect(ctrl.tail.name).toBe("Dylan");
    expect(ctrl.active.name).toBe("Byron");
    
    ctrl.delete();
    expect(ctrl.total).toBe(41);
    expect(ctrl.head.name).toBe("Blair");
    expect(ctrl.head.next.name).toBe("Dylan");
    expect(ctrl.length).toBe(2);

    ctrl.last();
    ctrl.delete();
    console.log("active name:", ctrl.active.name);
});
