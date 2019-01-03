const $search = document.querySelector(".input-search")
const $open = $search.querySelector(".-open")
const $close = $search.querySelector(".-close")

$open.addEventListener("click", event => {
    event.preventDefault() /* retira comportamentos padrões indesejáveis em determinados elementos que nesse caso, por ser um elemento "input", ao clicar é forçado a enviar dados e acaba recarregando a página no estado inicial desse formulário */
    $search.classList.toggle("-active");
    $open.classList.remove("-active");
    $close.classList.add("-active");
})

$close.addEventListener("click", event => {
  event.preventDefault();
  $search.classList.toggle("-active");
  $close.classList.remove("-active");
  $open.classList.add("-active");
});