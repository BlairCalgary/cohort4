import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import ListNode from './listnode.js';

test('test the basic ListForm', async () => {
    const node = {};
    node.name = "Blair";
    node.str = "11";

    render(<ListNode
        node={node}
        />);
    // screen.debug()

    // Did the values render correctly
    expect(getValue('nodeName')).toBe('Blair');
    expect(getValue('nodeStr')).toBe("11");

});

function getValue(name) {
    return document.querySelector(`[name=${name}]`).textContent;
}