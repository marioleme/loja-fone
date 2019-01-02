const $search = document.querySelector(".formSearch")
const $imgButton = $search.querySelector(".icon");

/* simplificando em uma linha a arrow-function + comando de uma linha apenas */
$imgButton.addEventListener("click", () => $search.classList.toggle("-active"));