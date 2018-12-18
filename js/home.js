let vlrCar = 10;
const $buttonCar = document.querySelector(".-second");

$buttonCar.addEventListener("click", handleClick);

function handleClick() {
  const $navCar = document.querySelector(".-last");

  /* opção tradicional para somar a variavel
  vlrCar = vlrCar + 1; */

  /* opção 1 de atalho para somar a variavel
  vlrCar += 1; */

  /* opção 2 de atalho para somar a variavel
  vlrCar++; */

  /* opção 3 é a forma mais resumida utilizada até 2015 para este caso, embutindo na linha de comando que altera o conteúdo de texto do HTML com concatenação  
  $navCar.textContent = "Carrinho (" + ++vlrCar + ")"; */

  /* opção 4 é a nova forma mais resumida utilizada a partir de  2015 para este caso, embutindo na linha de comando que altera o conteúdo de texto do HTML com TEMPLATE STRING */
  $navCar.textContent = `Carrinho (${++vlrCar})`;
}