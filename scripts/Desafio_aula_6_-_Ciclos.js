// CONTADOR DE LETRAS


while (true) {
    const palavra = prompt("Digite uma palavra, ou digite 'SAIR' para encerrar o contador:");
    let numLetras = palavra.length
    if (palavra === "SAIR") {
        alert ("O contador foi encerrado.");
        break;
    } else if (palavra === "") {
        alert ("Por favor, digite uma palavra.")
    } else {
        alert (`Você digitou a palavra "${palavra}", que tem ${numLetras} letras.`)
    }
}



