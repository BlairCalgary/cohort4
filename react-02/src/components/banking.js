import {Account} from './account.js';
import {AccountController} from './account.js';

// Add Event Listeners
totalFunds.addEventListener('click', (() => {
    clearOutputs();
    totalFundsOutput.textContent = accountController.totalAccts();
}));

acctMax.addEventListener('click', (() => {
    clearOutputs();
    acctMaxOutput.textContent = accountController.acctMax();
}));

acctMin.addEventListener('click', (() => {
    clearOutputs();
    acctMinOutput.textContent = accountController.acctMin();
}));

depositBtn.addEventListener('click', ((e) => {
    if (amtInput.value>0 && !(accountList.value==='Please select')) {
        let index = accountController.accts.findIndex(x => x.name===accountList.value);
        amtInput.value = Number(amtInput.value).toFixed(2);
        accountController.accts[index].deposit(Number(amtInput.value));
        rebuildCards();
        clearOutputs();
    } else {
        errorMsg();
    }
}));

withdrawBtn.addEventListener('click', ((e) => {
    if (amtInput.value>0) {
        let index = accountController.accts.findIndex(x => x.name===accountList.value);
        amtInput.value = Number(amtInput.value).toFixed(2);
        accountController.accts[index].withdraw(Number(amtInput.value));
        // balOutput.textContent = accountController.accts[0].display().toFixed(2);
        rebuildCards();
        clearOutputs();
    } else {
        errorMsg();
    }
}));

openAcct.addEventListener('click', (() => {
    if (!(newAcctName.value==="")) {
        accountController.addAcct(new Account(newAcctName.value, Number(startBal.value)));
        updateAccts();
        addAcctCard(accountController.accts[accountController.accts.length-1]);
        clearOutputs();
    }
}));

displayPanel.addEventListener('click', ((e) => {
    if (e.target.id==='closeAcct') {
        if (Number(e.target.parentNode.childNodes[1].textContent)===0) {
            closeAcct(e.target);
        } else {
            errMsg.textContent = 'Only empty accounts can be closed.';
        }
    }
}));

// Declare Functions
function clearOutputs() {
    let index;
    let classes = document.getElementsByClassName('output');
     for (index = 0; index < classes.length; index++) {
        classes[index].textContent = "";
    }
    newAcctName.value = "";
    startBal.value = "";
    amtInput.value = "";
    accountList.value = "Please select";
}
function closeAcct(eventTarget) {
    // Only close account if there are more than 1 account
    if (accountController.accts.length > 1) {
        // Remove div card from displayPanel
        accountController.removeAcct(eventTarget.parentNode.childNodes[0].textContent);
        updateAccts();
        rebuildCards();
        clearOutputs();
    }
}
function addAcctCard(obj) {
    clearOutputs();
    let acctparent = document.getElementById('displayPanel');
    let childNode = document.createElement("div");
    childNode.className = 'Card';
    let spanNode = document.createElement("span");
    spanNode.setAttribute("id", "acctName");
    spanNode.textContent = obj.name;
    childNode.appendChild(spanNode);
    let outputNode = document.createElement("span");
    outputNode.setAttribute("id", "balOutput");
    outputNode.className = "balOutput"
    outputNode.textContent = Number(obj.balance).toFixed(2);
    childNode.appendChild(outputNode);
    let btnNode = document.createElement("button");
    btnNode.setAttribute("id", 'closeAcct');
    btnNode.className = 'closeAcct btn';
    btnNode.textContent = 'Close Acct';
    childNode.appendChild(btnNode);
    acctparent.append(childNode);
}
function rebuildCards() {
    clearOutputs();
    let parent = document.getElementById('displayPanel');
    let child;
    while (parent.childElementCount>0) {
        child=parent.lastElementChild
        parent.removeChild(child);
    }
    let x;
    for (x = 0; x < accountController.accts.length; x++) {
        addAcctCard(accountController.accts[x]);
    }
}
function updateAccts() {
    clearOutputs();
    let parent = document.getElementById('accountList');
    let child;
    while (parent.childElementCount>1) {
        child=parent.lastElementChild
        parent.removeChild(child);
    }
    let i;
    for (i = 0; i < accountController.accts.length; i++) {
        let nodeAcct = document.createElement("OPTION");
        nodeAcct.textContent = `${accountController.accts[i].name}`;
        parent.appendChild(nodeAcct);
    }

};
function errorMsg() {
    errMsg.textContent = 'Required value > zero AND select account.';
};

// Initialize with chequing account of 25
const newAcct = 'Chequing'
const account = new Account(newAcct, 25);
const accountController = new AccountController();
accountController.addAcct(account);
updateAccts();
rebuildCards();