export class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    display() {
        return this.balance;
    }
    deposit(deposit) {
        this.balance = ((this.balance*100) + (deposit*100)) / 100;
    }
    withdraw(withdrawal) {
        this.balance= ((this.balance*100) - (withdrawal*100)) / 100;
    }
}

export class AccountController {
    constructor() {
        this.accts = [];
    }
    addAcct(obj) {
        this.accts.push(obj);
    }
    removeAcct(acctName) {
        console.log('removeAcct method: ', acctName);
        let index = this.accts.findIndex(x => x.name===acctName);
        this.accts.splice(index,1);   
    }
    totalAccts() {
        let total=0;
        let i;
        for (i = 0; i < this.accts.length ; i++) {
            total+=Number(this.accts[i].balance);
        }
        return total;
    }
    acctMax() {
        let max = 0;
        let i;
        switch (this.accts.length) {
            case 0:
                return null;
            case 1:
                return this.accts[0].name + ' - ' + this.accts[0].balance;
            default:
                for (i = 0; i < this.accts.length-1 ; i++) {   
                    (this.accts[i].balance > this.accts[i+1].balance ?
                        max = i :
                        max = i+1);
                }
                return this.accts[max].name + ' - ' + this.accts[max].balance;
                    
        }
    }
    acctMin() {
        let min = 0;
        let i;
        switch (this.accts.length) {
            case 0:
                return null;
            case 1:
                return this.accts[0].name + ' - ' + this.accts[0].balance;
            default:
                for (i = 0; i < this.accts.length-1 ; i++) {   
                    (this.accts[i].balance < this.accts[i+1].balance ?
                        min = i :
                        min = i+1);
                }
                return this.accts[min].name + ' - ' + this.accts[min].balance
        }
    }
}

