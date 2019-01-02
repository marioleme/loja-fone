const $search = document.querySelector(".formSearch")
const $imgButton = $search.querySelector(".icon");

$imgButton.addEventListener("click", () => {
    $search.classList.toggle("-active")
    $imgButton.classList.toggle("-close")
});