
class Account {
    constructor(accName,accBal){
        this.AccountName = accName
        this.AccountBalance = accBal
    }
    getAccountDetails = function(){
        return `Account Details are ${this.AccountName} and ${this.AccountBalance}`
    }
    getDetails = ()=> `Account Details are ${this.AccountName} and ${this.AccountBalance}`
}

let accObj = new Account("Khan","$1220000")

console.log(accObj.getAccountDetails())
console.log(accObj.getDetails())


