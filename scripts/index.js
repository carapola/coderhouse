let nome = prompt ("Qual o seu nome?")
let sobrenome = prompt ("E seu sobrenome?")
let anoNascimento = prompt ("E em qual ano você nasceu?")

var nomeCompleto = `${nome} ${sobrenome}`
var idade = 2024 - parseInt(anoNascimento)

alert("Olá, " + nomeCompleto + "! Você tem " + idade + " anos.")