//Declaraçao de variedades
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informaçoes do usuario

nome = prompt("Digite seu nome: ")
idade = prompt("Informe sua idade: ")
altura = prompt("Informe sua altura: ")
peso = prompt("Inform o seu peso: ")

//Calculando o ano que a pessoa nasceu e IMC

let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

//Exibindo informaçoes no console

console.log("Olá " + nome + ", você tem " + idade +" anos, você nasceu em "+ anoNasc +", tem "+ altura +
            " de altura, pesa " + peso + " kg e seu IMC corporal é de " + imc + " kg/m²")