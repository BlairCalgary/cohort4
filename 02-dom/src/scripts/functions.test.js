import functions from './functions.js';

document.body.innerHTML =
`<div id="myDiv" class="container">`+
`<ol id='myOL'>This is a list of stuff<br><br>` +
    '<li>Item 1</li>' +
    '<li>Item 2</li>' +
    '<li>Item 3</li>' +
'</ol><br>'+
`<div id='leftPanel'>` +
`<div id='1'></div>` +
`<div id='2'></div>` +
`<div id='3'></div>` +
`</div>` +
`</div>`;

test('Does it add an <li>?', () => {
    var i = document.getElementById('myOL').children.length;
    functions.addLi();
    expect(document.getElementById('myOL').children.length-i).toBe(1);
    expect(document.getElementById('myOL').lastChild.textContent).toBe('Append Item');
    
});

test('Does it add an <li> to the start?', () => {
    var i = document.getElementById('myOL').children.length;
    functions.insertLi();
    expect(document.getElementById('myOL').childNodes[1].innerHTML).toBe('Insert Item');
});

test('Does it remove an <li>?', () => {
    var i = document.getElementById('myOL').children.length;
    functions.removeLi();
    expect(i-document.getElementById('myOL').children.length).toBe(1);
});

test('Does delete card work?', () => {
    var parent = document.getElementById('leftPanel');
    functions.deleteCard(parent, parent.childNodes[1]);
    expect(parent.childNodes[1].getAttribute('id')).toBe('3');
});

test('Does addBefore work?', () => {
    var parent = document.getElementById('leftPanel');
    var newCard = document.createElement("DIV");
    newCard.setAttribute("id", "4");
    functions.addBefore(parent, newCard, parent.childNodes[1]);
    expect(parent.childNodes[1].getAttribute('id')).toBe('4');
});

test('Does addAfter work?', () => {
    var parent = document.getElementById('leftPanel');
    var newCard = document.createElement("DIV");
    newCard.setAttribute("id", "5");
    functions.addAfter(parent, newCard, parent.childNodes[1]);
    expect(parent.childNodes[2].getAttribute('id')).toBe('5');
});

test('Does addCard work?', () => {
    var parent = document.getElementById('leftPanel');
    var newCard = document.createElement("DIV");
    newCard.setAttribute("id", "6");
    functions.addCard(parent, newCard);
    expect(parent.childNodes[4].getAttribute('id')).toBe('6');
})



