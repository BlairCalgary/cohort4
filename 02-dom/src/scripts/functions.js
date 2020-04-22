const functions = {

    addLi: () => {
        var node = document.createElement("li");
        node.textContent = `Append Item`;
        var targetelement = document.getElementById('myOL');
        targetelement.insertAdjacentElement('beforeend', node);
    },
    insertLi: () => {
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insert Item");
        node.appendChild(textnode);
        // document.getElementById('myOL').appendChild(node);
        var list = document.getElementById('myOL');
        list.insertBefore(node, list.childNodes[1]);
    },
    removeLi: () => {
        var parent = document.getElementById('myOL');
        var child = document.getElementById('myOL').lastElementChild;
        parent.removeChild(child);
    },
    deleteCard: (parent, node) => {
        parent.removeChild(node);
    },
    addBefore: (parent, node, target) => {
        parent.insertBefore(node, target);
    },
    addAfter: (parent, node, target) => {
        parent.insertBefore(node, target.nextSibling);
    },
    addCard: (parent, node) => {
        parent.appendChild(node);
    }
};

export default functions; 
