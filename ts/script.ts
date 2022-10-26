/*
-creo classi per madre e figlio;
-eseguano azioni di versamento e prelievo;
-in grado di stampare saldo attuale della madre;
-calcolo dell'interesse 10% nel conto della madre;
*/
let input = document.querySelector('input') as HTMLInputElement
let inputValue = Number(input.value.trim())
let accountSelect = document.querySelector('select') as HTMLSelectElement
let selectValue = accountSelect.value
let deposittBtn = document.getElementById('depositBtn')
let withdrawBtn = document.getElementById('withdrawBtn')

class BasicUser {
    name: string;
    psw: string;
    protected balance: number = 0;

    constructor(name: string, psw:string){
        this.name = name;
        this.psw = psw;
    }

    getBalance(){
        return this.balance;
    }

    deposit(cash:number){
        this.balance += cash;
        console.log('*********')
        console.log(`saldo madre è: ${MotherAccount.getBalance()}`)
        console.log(`saldo figlio è: ${SonAccount.getBalance()}`)
    }

    withdraw(cash:number){
        if(this.balance > cash){
            this.balance -= cash;
        }else{
            console.error('Saldo insufficiente per questo prelievo.');
            
        }
        
    }
}

/* La classe interestUser eredità le proprietà e i 
metodi di BasicUser aggiornando il metodo di deposit()
*/

class InterestUser extends BasicUser {
    

    deposit(cash: number) {
        let interest:number = 10/100;
        cash += cash*interest
        this.balance += cash
        console.log('*********')
        console.log(`saldo madre è: ${this.balance}`)
        console.log(`saldo figlio è: ${SonAccount.getBalance()}`)
    }   
}
let SonAccount = new BasicUser('Son','ciao')
let MotherAccount = new InterestUser('Mother','ciao')





console.log('*******init******')
console.log(`saldo madre è: ${MotherAccount.getBalance()}`)
console.log(`saldo figlio è: ${SonAccount.getBalance()}`)