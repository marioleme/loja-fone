/* desafios desse código:
1 - ter a janela (browser) na mão
2 - ter o HTML na mão
3 - pegar o coração 
4 - pegar clique no coração
5 - quando o coreção for clicado mostrar uma mensagem 
*/

/* 
descrição da síntaxe desse comando
1 --> entra dentro da janela (browser)
2 --> entra dentro do HTML (documento)
3 --> faça uma busca dentro do HTML pelo seletor de classe passado dentro do parênteses como parâmetro que no caso é o nome de uma classe modificadora (-heart)
                 1      2               3                  */
const $heart = window.document.querySelector(".-heart");


/*
descrição da síntaxe desse comando
1 - pegando o conteúdo da variável
2 - adicionar um ouvinte no conteúdo da variável
3 - determinando o tipo de ouvinte ou tipo de evento
4 - é uma função (sem parênteses) previamente criada para ser executada somente no momento do click no elemento constante da variável
   1          2            3          4              */
$heart.addEventListener("click", handleClick);


/*
- essa function guarda comando para serem executados com o nosso controle e não ao carregar a página
- handleClick é um comando para lidar com um evento de click na página
*/

function handleClick() {
    console.log("Clicado");
}