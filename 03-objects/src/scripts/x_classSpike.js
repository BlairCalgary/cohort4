var myObj = `{"name":"Blair",
    "age":"44",
    "city":"Calgary"}`

console.log('JS Object: ',myObj);
console.log('first key :', myObj[0]);

var obj = JSON.parse(myObj);

console.log('Result of JSON.parse: ', obj);
console.log('first key :', obj[name]);


var myJSON = JSON.stringify(obj);

console.log('Result of JSON.stringify: ', myJSON);



// // Define class account

// class Account {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }
//     display() {
//         return this.balance;
//     }
//     deposit(deposit) {
//         this.balance = ((this.balance*100) + (deposit*100)) / 100;
//     }
//     withdraw(withdrawal) {
//         this.balance= ((this.balance*100) - (withdrawal*100)) / 100;
//     }
// }

// class AccountController {
//     constructor() {
//         this.accts = [];
//     }
//     addAcct(obj) {
//         this.accts.push(obj);
//     }
//     removeAcct(acctName) {
//         let index = this.accts.findIndex(x => x.name===acctName);
//         this.accts.splice(index,1);   
//     }
//     totalAccts() {
//         let total=0;
//         let i;
//         for (i = 0; i < this.accts.length ; i++) {
//             total+=Number(this.accts[i].balance);
//         }
//         return total;
//     }
//     acctMax() {
//         let max = 0;
//         let i;
//         switch (this.accts.length) {
//             case 0:
//                 return null;
//                 break;
//             case 1:
//                 return this.accts[0].balance;
//                 break;
//             default:
//                 for (i = 1; i < this.accts.length ; i++) {   
//                     (this.accts[i-1].balance > this.accts[i].balance ? max = Number(this.accts[i-1].balance) : max = Number(this.accts[i].balance))
//                     return max;
//                 }
//         }
//     }
//     acctMin() {
//         let max = 0;
//         let i;
//         switch (this.accts.length) {
//             case 0:
//                 return null;
//                 break;
//             case 1:
//                 return this.accts[0].balance;
//                 break;
//             default:
//                 for (i = 1; i < this.accts.length ; i++) {   
//                     (this.accts[i-1].balance < this.accts[i].balance ? max = Number(this.accts[i-1].balance) : max = Number(this.accts[i].balance))
//                     return max;
//                 }
//         }
//     }
// }

// // Initialize account controller
// const acctCtrl = new AccountController ();
// // Create accounts and send it to account controller

// var acct = new Account('Chequing',333);
// acctCtrl.addAcct(acct);
// var acct = new Account('Bicycle Fund',222);
// acctCtrl.addAcct(acct);
// console.log(acctCtrl.accts);
// // Remove chequing account
// acctCtrl.removeAcct('Chequing');
// console.log(acctCtrl.accts);
// // Add chequing account again
// var acct = new Account('Chequing',111);
// acctCtrl.addAcct(acct);
// // Test total of accounts
// console.log('acctCtrl.totalAccts(): ', acctCtrl.totalAccts());
// console.log('acctCtrl.acctMax(): ', acctCtrl.acctMax());
// console.log('acctCtrl.acctMin(): ', acctCtrl.acctMin());





// // Initialize empty array
// var banking = [];

// // Instantiate new account and push into array
// var acct = new Account('chq',25);
// banking.push(acct);

// // Instantiate new account and push into array
// var acct = new Account('sav',100);
// banking.push(acct);


// console.log(banking);

// // Run display method on first and second objects in array
// console.log(banking[0].display());
// console.log(banking[1].display());

// // Run display method on first object and log balance
// banking[0].deposit(1);
// console.log(banking[0].display());

// console.log(banking[0].name);

// // Return index of a named account
// index = banking.findIndex(x => x.name==="chq");
// console.log(index);

// console.log(banking[0]);
// console.log(banking[1]);

// // Remove account from array
// banking.splice(index,1);

// console.log(banking[0]);
// console.log(banking[1]);
