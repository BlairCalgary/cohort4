import beers from './styles.js';
import { ItemNode, Styles, Fifo, Lifo } from './fifo.js'

test('test Styles', () => {
    const styles = new Styles();
    expect(styles.styles.length).toBe(175);
    expect(styles.styles[24]).toBe('American-Style Pale Ale');
    expect(styles.styles[42]).toBe('American-Style Imperial Stout');
});

test('test ItemNode', () => {
    const styles = new Styles();
    const itemNode = new ItemNode(styles.getStyle());
    expect((itemNode.name)).toBeTruthy();
});

test('test Fifo', () => {
    const styles = new Styles();
    const fifo = new Fifo();
    expect(fifo).toBeInstanceOf(Fifo);
    expect(fifo.items.length).toBe(0);
    const itemName = styles.getStyle();
    fifo.enqueue(itemName);
    expect(fifo.new.name).toBe(itemName);
    expect(fifo.items.length).toBe(1);
    const itemName2 = styles.getStyle();
    fifo.enqueue(itemName2);
    expect(fifo.new.name).toBe(itemName2);
    expect(fifo.items.length).toBe(2);
    const itemName3 = styles.getStyle();
    fifo.enqueue(itemName3);
    expect(fifo.new.name).toBe(itemName3);
    expect(fifo.items.length).toBe(3);
});

test('test Fifo enqueue', () => {
    const styles = new Styles();
    const fifo = new Fifo();
    expect(fifo).toBeInstanceOf(Fifo);
    fifo.enqueue(styles.getStyle());
    const first = fifo.items[0].name;
    fifo.enqueue(styles.getStyle());
    expect(fifo.items[0].name).toBe(first);
    fifo.enqueue(styles.getStyle());
    expect(fifo.items.length).toBe(3);
    const second = fifo.items[1].name;
    const third = fifo.items[2].name;
    fifo.dequeue();
    expect(fifo.items[0].name).toBe(second);
    expect(fifo.items[1].name).toBe(third);
    expect(fifo.items.length).toBe(2);
    fifo.dequeue();
    expect(fifo.new.name).toBe(third);
    fifo.dequeue();
    expect(fifo.items.length).toBe(0);
});

test('test Lifo enqueue', () => {
    const styles = new Styles();
    const lifo = new Lifo();
    expect(lifo).toBeInstanceOf(Lifo);
    const itemName = styles.getStyle();
    lifo.enqueue(itemName);
    expect(lifo.items.length).toBe(1);
    const first = lifo.items[0].name;
    lifo.enqueue(styles.getStyle());
    expect(lifo.items.length).toBe(2);
    expect(lifo.items[0].name).toBe(first);
    lifo.enqueue(styles.getStyle());
    expect(lifo.items.length).toBe(3);
    const second = lifo.items[1].name;
    lifo.dequeue();
    expect(lifo.items[0].name).toBe(first);
    expect(lifo.items[1].name).toBe(second);
    expect(lifo.items.length).toBe(2);
    lifo.dequeue();
    lifo.dequeue();
    expect(lifo.items.length).toBe(0);
});

