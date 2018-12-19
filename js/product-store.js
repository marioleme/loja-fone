const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);


/*  EXPLICAÇÃO FOREACH
    Linha de comando para tratar todos os elementos de uma lista
1 - Chama a lista
2 - comando para iterar com todos os elementos da lista
3 - função anônima para ser executada em todos os elementos
4 - variável que recebe o elemento corrente da lista
5 - variável "index" ou "key" que recebe a posição do elemento corrente da lista

   1      2        3      4     5 
$stars.forEach(function($star, key) {
})*/

$stars.forEach(function ($star) {
    $star.addEventListener("click", handleClick);
});

/*  SIMPLIFICANDO O CÓDIGO ABAIXO 
function handleHeart() {
    this.classList.toggle("-active");
}
function handleStar() {
    this.classList.toggle("-active");
}
    PARA:*/
function handleClick() {
    this.classList.toggle("-active");
}

/*  ESTRELAS -- RANK -- DESAFIO INTERMEDIÁRIO
    MEU CÓDIGO ok PARA ITERAÇÃO INDIVIDUAL
const $star = document.querySelectorAll(".item.-star .star");

for (let i = 0; i <= $star.length; i++) {
  $star[i].addEventListener("click", handleClick);
  function handleClick() {
    $star[i].classList.toggle("-active");
  }
}

/*  ESTRELAS -- RANK -- DESAFIO AVANÇADO
    MEU CÓDIGO DE TENTATIVA AVANÇADO - ITERAÇÃO EM GRUPO
const $star = document.querySelectorAll(".item.-star .icon")
for (let i = 0; i <= $star.length; i++) {
    $star[i].addEventListener("click", handleClick);
    function handleClick() {
        if (this.contains(".-active")) {
            for (let x = i; x <= $star.length - 1; x++) {
                $star[x].classList.toggle("-active");
            }
        } else {
            for (let x = i; x <= 0; x--) {
                $star[x].classList.toggle("-active");
            }            
        }
    }
}*/