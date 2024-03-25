// OBJETOS - lista dos itens em forma de objetos

let Italiano = {
    preçoDesconto: 12.90,
    preçoOriginal: 16.90,
}

let Grelhado = {
    preçoDesconto: 15.90,
    preçoOriginal: 19.90,
}

let Bacon = {
    preçoDesconto: 19.90,
    preçoOriginal: 24.90,
}

let QueijoQuente = {
    preçoDesconto: 10.90,
    preçoOriginal: 13.90,
}

let Rosbife = {
    preçoDesconto: 19.90,
    preçoOriginal: 24.90,
}

const opções = ['Italiano', 'Grelhado', 'Bacon', 'Queijo', 'Rosbife'] // Array de todas as opções de itens para comparação com o selecionado nos prompts
const sacola = [] // Array da sacola, itens adicionados entram aqui

const addGeral = (addGeral) => { // Botão de adicionar, prompt pede pro cliente digitar o nome do item e a quantidade que deseja adicionar e inclui isso no array da Sacola
    const addItemGeral = prompt ('Qual item você deseja adicionar à sacola?')
    const quantItemGeral = parseInt (prompt ('Quantas unidades você deseja adicionar à sacola?'))
    if (opções.includes(addItemGeral) && quantItemGeral == 1) { // Retorna o item adicionado no singular
        for (let i = 0; i < quantItemGeral; i++)
        sacola.push(addItemGeral)
        alert (`O item ${addItemGeral} foi adicionado à sua sacola`)
    } else if (opções.includes(addItemGeral) && quantItemGeral > 1) { // Retorna o item adicionado no plural
        for (let i = 0; i < quantItemGeral; i++)
        sacola.push(addItemGeral)
        alert (`O item ${addItemGeral} foi adicionado ${quantItemGeral} vezes à sua sacola`)
    }
    else if (quantItemGeral == 0) { // Retorna erro caso a quantidade seja 0
        return alert (`Insira uma quantidade válida.`)
    } else { // Retorna erro caso o item não exista no array opções
        return alert (`O item digitado não existe.`)
    }
}

// Essa função ainda precisa ser linkada aos botões de "Adicionar à sacola" que estarão no HTML, dentro de cada opção de item
const addIndividual = (item) => { // Botão de adicionar dentro de cada item, prompt pede a quantidade e adiciona no array da Sacola
    const quantItemIndividual = parseInt (prompt ('Quantas unidades você deseja adicionar à sacola?'))
    if (quantItemIndividual == 1) { // Retorna o item adicionado no singular
        for (let i = 0; i < quantItemIndividual; i++)
        sacola.push(item)
        alert (`O item ${item} foi adicionado à sua sacola`)
    } else if (quantItemIndividual > 1) { // Retorna o item adicionado no plural
        for (let i = 0; i < quantItemIndividual; i++)
        sacola.push(item)
        alert (`O item ${item} foi adicionado ${quantItemIndividual} vezes à sua sacola`)
    }
    else if (quantItemIndividual == 0) { // Retorna erro caso a quantidade seja 0
        return alert (`Insira uma quantidade válida.`)
    }
}

/*
// essa parte não sei se funciona, não consegui testar. A ideia é pegar a quantidade que cada item está no array sacola, somar os valores individuais, somar o total dos valores dos itens, e mostrar tudo via alert.
const verSacola = () => { // Alert indica todos os itens que estão na sacola, seus vsalores e o preço total do pedido até o momento
    let quantItaliano = 0;
    let quantGrelhado = 0;
    let quantBacon = 0;
    let quantQueijo = 0;
    let quantRosbife = 0;
    let somaPreços = 0;
    for (const item of sacola) {
        if (item === Italiano) {
            quantItaliano++;
            somaPreços += Italiano.preçoDesconto;
        } else if (item === Grelhado) {
            quantGrelhado++;
            somaPreços += Grelhado.preçoDesconto;
        } else if (item === Bacon) {
            quantBacon++;
            somaPreços += Bacon.preçoDesconto;
        } else if (item === Queijo) {
            quantQueijo++;
            somaPreços += Queijo.preçoDesconto;
        } else if (item === Rosbife) {
            quantRosbife++;
            somaPreços += Rosbife.preçoDesconto;
        }
    }
    return alert (`Esta é sua sacola: ${quantItaliano} Italiano, ${quantGrelhado} Grelhado, ${quantBacon} Bacon, 
    ${quantQueijo} Queijo, ${quantRosbife} Rosbife. O preço total de seu pedido é R$ ${somaPreços}`)
}
*/

const avaliação = () => {} // Prompt pede uma nota de 1 a 5, calcula a média das notas e quantidade de avaliações e atualiza a nota em tempo real
