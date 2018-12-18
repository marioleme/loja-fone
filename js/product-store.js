/* CORAÇÃO -- LIKE */
const $heart = document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
    $heart.classList.toggle("-active");
}

/* ESTRELAS -- RANK */
const $star = document.querySelectorAll(".item.-star .icon")

for (let i = 0; i <= $star.length; i++) {
    $star[i].addEventListener("click", handleClick);
    function handleClick() {
        $star[i].classList.toggle("-active");
    }
}