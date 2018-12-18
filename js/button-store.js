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


AVANÇADO - Ao clicar no botão Adicionar no Carrinho, mudar o valor de '10' para '11' na opção de menu "Carrinho"
Steps:
1 - pegar a janela -> o HTML -> e o button e colocar em uma variável constante
1 - pegar a janela -> o HTML -> e o nav e colocar em uma variável constante
2 - adicionar a variável do botão um ouvinte de evento click e sua respectiva função a ser executada no momento do seu clique
3 - criar função para alterar o texto do item de menu do Carrinho
*/

/* meu código
const $buttonCar = window.document.querySelector(".-second");
const $navCar = window.document.querySelector(".action.-last");

$buttonCar.addEventListener("click", addCar);

function addCar() {
    $navCar.innerHTML = "Carrinho (11)";
}; */

/* código corrigido em aula Marco */
const $buttonCar = document.querySelector(".-second");

$buttonCar.addEventListener("click", addCar);

function addCar() {
    const $navCar = document.querySelector(".-last");
    $navCar.textContent = "Carrinho (11)";
};