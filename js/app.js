//Variáveis globais
let nome = document.getElementById("nome-amigo");
let listaAmigos = document.getElementById("lista-amigos");
let adicionados = [];
let sorteados = document.getElementById("lista-sorteio");

//Função Adicionar Nome
function adicionar() {

    adicionados.push(nome.value);
    let adicionadosShow = adicionados.join(", ");

    listaAmigos.innerHTML =
        `
    <p id="lista-amigos">${adicionadosShow}</p>
    `;

    nome.value = '';

    console.log(adicionados);
}

// //Fisher-Yates
// function randomizer(grupo) {
//     for (let sequencia = grupo.length - 1; sequencia > 0; sequencia--) {
//         let embaralhar = Math.floor(Math.random() * (sequencia + 1));
//         [grupo[sequencia], grupo[embaralhar]] = [grupo[embaralhar], grupo[sequencia]];
//     }

//     return grupo;
// }

// Durstenfeld
function randomizer(grupo) {
    for (let sequencia = grupo.length - 1; sequencia > 0; sequencia--) {

        let embaralhar = Math.floor(Math.random() * (sequencia + 1));

        let temp = grupo[sequencia];

        grupo[sequencia] = grupo[embaralhar];
        grupo[embaralhar] = temp;

    }

    return grupo;
}

//Função Sortear Nomes
function sortear() {
    let duplas = [];
randomizer(adicionados);


    for (let i = 0; i < adicionados.length - 1; i += 2) {
        
        if (i + 1 < adicionados.length) {
            duplas.push([adicionados[i], adicionados[i + 1]]);
           

        }else {
            duplas.push([adicionados[i]]);
        }

        
    }

    if (duplas.length % 2 !== 0) {

        alert("Número ÍMPAR de nomes! Não deixe ninguém sozinho!!");
    

    }

    sorteados.innerHTML = duplas.map(function(duplaSorteada){
        return duplaSorteada.join(" - ")
    }).join("<br>")
   

    // let randomDuplas = randomizer(adicionados);
    console.log(duplas);
    // console.log(randomDuplas);

    // let listaDeSorteados = randomDuplas.map(function(duplaSorteada){
    //     return duplaSorteada.join(" - ")
    // }).join("<br>");



    // sorteados.innerHTML = 
    // `
    // <p id="lista-sorteio">${listaDeSorteados}</p>
    // `

}

//Função Reiniciar
function reiniciar() {
    nome.value = '';
    listaAmigos.innerHTML = `<p id="lista-amigos"></p>`
    sorteados.innerHTML = `<p id="lista-sorteio"></p>`

}