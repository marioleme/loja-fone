/* Desafios da Aula 013:

BÁSICO - Mostrar o HTML do button "Adicionar no Carrinho" no console
Steps:
1 - pegar a janela -> o HTML -> e o button e colocar em uma variável constante
2 - mostrar o conteúdo dessa variável no console

INTERMEDIÁRIO - Mostrar mensagem no console com o clique no button
Steps:
1 - pegar a janela -> o HTML -> e o button e colocar em uma variável constante
2 - adicionar a essa variável um ouvinte do evento click e sua respectiva função a ser executada no momento do clique
3 - criar a função para mostrar mensagem no console a partir do click no button
*/


const $buttonCar = window.document.querySelector(".-second");

$buttonCar.addEventListener("click", addCar);

function addCar() {
    console.log("Clicado! top top top");
}

