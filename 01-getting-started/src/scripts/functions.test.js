import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(101)).toBe("extra large");
    expect(functions.size(2000000)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(functions.subtract(3,2)).toBe(1);
    expect(functions.subtract(303,101)).toBe(202);
});

test('Does that subtract function work?', () => {
    expect(functions.divide(39,13)).toBe(3);
    expect(functions.divide(6,3)).toBe(2);
});

test('Does that subtract function work?', () => {
    expect(functions.multiply(3,2)).toBe(6);
    expect(functions.multiply(3,13)).toBe(39);
});


test('Calculator clicked', () => {
    expect(functions.calc('0')).toBe('buildnum');
    expect(functions.calc('1')).toBe('buildnum');
    expect(functions.calc('2')).toBe('buildnum');
    expect(functions.calc('3')).toBe('buildnum');
    expect(functions.calc('4')).toBe('buildnum');
    expect(functions.calc('5')).toBe('buildnum');
    expect(functions.calc('6')).toBe('buildnum');
    expect(functions.calc('7')).toBe('buildnum');
    expect(functions.calc('8')).toBe('buildnum');
    expect(functions.calc('9')).toBe('buildnum');
    expect(functions.calc('.')).toBe('decimal');
    expect(functions.calc('+')).toBe('add');
    expect(functions.calc('-')).toBe('subtract');
    expect(functions.calc('÷')).toBe('divide');
    expect(functions.calc('×')).toBe('multiply');
    expect(functions.calc('=')).toBe('equal');
    expect(functions.calc('C')).toBe('clear');
})
