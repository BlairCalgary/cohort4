import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import AccountMgmt from './accountmgmt';

test('test the account creation form', async () => {
    const mockAddAcctCallback = jest.fn();
    const mockErrorMsgCallback = jest.fn();

    render(<AccountMgmt
        addAcct={mockAddAcctCallback}
        errorMsg={mockErrorMsgCallback}
        />);

    expect(getValue('acctName')).toBe('');

    click('Open Account');

    expect(mockErrorMsgCallback.mock.calls.length).toBe(1);

});

function getValue(name) {
    return document.querySelector(`[name=${name}]`).value;
};

function updateValue(name, value) {
    document.querySelector(`[name=${name}]`).value = value;
};

function updateTextContent(name, value) {
    document.querySelector(`[name=${name}]`).textContent = value;
};

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}