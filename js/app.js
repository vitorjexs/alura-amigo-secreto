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

//Função Sortear Nomes
function sortear() {
    let duplas = [];
    for (let i = 0; i < adicionados.length; i += 2) {
        if (i + 1 < adicionados.length) {
            duplas.push([adicionados[i], adicionados[i + 1]]);
        } else {
            alert("Número ÍMPAR de nomes! Não deixe ninguém sozinho!!");
        }
    }
    console.log(duplas);

    

}

//Função Reiniciar
function reiniciar(){
    nome.value = '';
    listaAmigos.innerHTML = `<p id="lista-amigos"></p>`

}