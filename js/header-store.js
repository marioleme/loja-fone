const $search = document.querySelector(".formSearch")

/* simplificando em uma linha a arrow-function + comando de uma linha apenas */
$search.addEventListener("click", () => $search.classList.toggle("-active"));