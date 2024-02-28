/*

Exercício Aula 4 -> FUNÇÕES



Caso 1: Checagem de divisibilidade

const divisiveis = () => {
    const divisor = parseInt (prompt ("Insira o divisor: "))
    const dividendo = parseInt (prompt ("Insira o dividendo: "))
    if (divisor >= dividendo) {
        if (divisor % dividendo === 0) {
        let resultado = divisor / dividendo
        return alert (`Os números são divisíveis, e o resultado da divisão é ${resultado}.`)
        } else {
        return alert (`O número ${dividendo} não é divisível por ${divisor}.`)
        }
    } else {
        return alert ("O divisor deve ser maior do que o dividendo.")
    }
}

divisiveis()



Caso 2: Calculadora de IMC

const calcularIMC = () => {
    const peso = parseFloat (prompt ("Insira seu peso em quilos: "))
    const altura = parseFloat (prompt ("Insira sua altura em metros: "))
    let IMC = peso / (altura * altura)
    if (IMC <= 16.9) {
        return alert (`Seu IMC é ${IMC}, sendo categorizado como "Muito Abaixo do Peso"`)
    } else if (IMC <= 18.4) {
        return alert (`Seu IMC é ${IMC}, sendo categorizado como "Abaixo do Peso"`)
    } else if (IMC <= 24.9) {
        return alert (`Seu IMC é ${IMC}, sendo categorizado como "Peso Adequado"`)
    }  else if (IMC <= 29.9) {
        return alert (`Seu IMC é ${IMC}, sendo categorizado como "Acima do Peso"`)
    } else if (IMC <= 34.9) {
        return alert (`Seu IMC é ${IMC}, sendo categorizado como "Obesidade de Grau I"`)
    } else if (IMC <= 40) {
        return alert (`Seu IMC é ${IMC}, sendo categorizado como "Obesidade de Grau II"`)
    } else {
        return alert (`Seu IMC é ${IMC}, sendo categorizado como "Obesidade de Grau III"`)
    }
}

calcularIMC()



Caso 3: Calculadora de desconto

const calcularPreço = () => {
    const preço = parseInt (prompt ("Qual o preço original do produto?"))
    const desconto = parseInt (prompt ("Qual o desconto?"))
    let valorDesconto = desconto * preço / 100
    let preçoPromoção = preço - valorDesconto
    return alert (`O preço do produto com desconto é R$ ${preçoPromoção}, e você economizará R$ ${valorDesconto}.`)
}

calcularPreço() 
*/





























// Prática de aula
/* 
let nome = prompt ("Qual o seu nome?")
let sobrenome = prompt ("E seu sobrenome?")
let anoNascimento = prompt ("E em qual ano você nasceu?")

var nomeCompleto = `${nome} ${sobrenome}`
var idade = 2024 - parseInt(anoNascimento)

alert("Olá, " + nomeCompleto + "! Você tem " + idade + " anos.") 
*/

/*
const numero = parseInt(prompt ("Digite um número:"))

if (numero === 1) {
    console.log ('Um')
} else if (numero === 2) {
    console.log ('Dois')
} else if (numero === 3) {
    console.log ('Três')
} else if (numero === 4) {
    console.log ('Quatro')
} else if (numero === 5) {
    console.log ('Cinco')
} else {
    console.log ('Não conheço esse número.')
}
*/

/*
const numero = parseInt(prompt ("Digite um número de 1 a 100"))

if (numero <= 10) {
    console.log (numero)
    alert ("Seu número está entre 1 e 10")
} else if (numero <= 20) {
    console.log (numero)
    alert ("Seu número está entre 11 e 20")
} else if (numero <= 30) {
    console.log (numero)
    alert ("Seu número está entre 21 e 30")
} else if (numero <= 40) {
    console.log (numero)
    alert ("Seu número está entre 31 e 40")
} else if (numero <= 50) {
    console.log (numero)
    alert ("Seu número está entre 41 e 50")
} else if (numero <= 60) {
    console.log (numero)
    alert ("Seu número está entre 51 e 60")
} else if (numero <= 70) {
    console.log (numero)
    alert ("Seu número está entre 61 e 70")
} else if (numero <= 80) {
    console.log (numero)
    alert ("Seu número está entre 71 e 80")
} else if (numero <= 90) {
    console.log (numero)
    alert ("Seu número está entre 81 e 90")
} else if (numero <= 100) {
    console.log (numero)
    alert ("Seu número está entre 91 e 100")
} else {
    console.log (numero)
    alert ("Seu número é inválido.")
}
*/

/*
const vogal = prompt ("Digite uma vogal:")

if (vogal != "" && vogal === "A" || vogal === "E" || vogal  === "I" || vogal === "O" || vogal === "U") {
    console.log ("Você digitou a vogal " + vogal)
    alert ("Você digitou a vogal " + vogal)
} else {
    console.log (vogal + " não é uma vogal")
    alert (vogal + " não é uma vogal")
}
*/

/*
function parOuImpar() {
    const numero = prompt ("Digite um número: ")
    if (numero % 2 === 0) {
        alert ("O número é par")
    } else {
        alert ("O número é ímpar")
    }
}

parOuImpar ()
*/

/*
let resultado = 0

function subtracao() {
    const num1 = prompt ("Digite o primeiro número: ")
    const num2 = prompt ("Digite o segundo número: ")
    if (num1 > num2) {
        return resultado = num1 - num2
    } else if (num2 > num1) {
        return resultado = num2 - num1
    } else if (num1 === num2) {
        return resultado = num1 - num2
    }
}

subtracao()
alert (resultado)
*/

/*
let resultado = 0

const multiplicacao = (num1, num2) => num1 * num2
const adicao = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1 - num2
const divisao  =  (num1, num2) => num1 / num2

const calculadora = (num1, operador, num2) => {
    const num1 = parseInt(prompt('Informe o primeiro valor: '))
    const operador = prompt('Informe o tipo: * , + , - , /')
    const num2 = parseInt(prompt('Informe o segundo numero: '))
    if (operador === "*") {
        return resultado = multiplicacao(num1, num2)
    } else if (operador === "+") {
        return resultado = adicao(num1, num2)
    } else if (operador === "-") {
        return resultado = subtracao(num1, num2)
    } else if (operador === "/") {
        return resultado = divisao(num1, num2)
    }
}

calculadora()
alert (resultado)
*/
