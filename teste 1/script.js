/*let deposito = document.getElementById('depositar')
function depositaDinheiro(){
    console.log(Number(deposito.value))
}
*/

let deposito = document.getElementById('depositar').value
let saque = document.getElementById('saque').value
let saldo = 0  

function depositaDinheiro(){
    saldo += Number(deposito)
}

console.log(Number(deposito))

function sacaDinheiro(){
    saldo - Number(deposito)
}

console.log(saldo)

    













/*
class contaBancaria{
    constructor(){
        this.deposito = document.getElementById('deposito')
        this.saque = document.getElementById('saque')
        this.saldo = document.getElementById('saldo')
    }

    depositaDinheiro(valorDeposito){
        this.saldo += valorDeposito
    }

    sacaDinheiro(valorSaque){
        this.saldo -= valorSaque
    }

    consultaSaldo(){
        return this.saldo
    }
}

let x = new contaBancaria(this.deposito)

*/