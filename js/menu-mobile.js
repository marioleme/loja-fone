const $menuMobile = document.querySelector(".menu-mobile")
const $menu = document.querySelector(".menu")
const $menuClose = $menu.querySelector(".close")

$menuMobile.addEventListener("click", event => {
    event.preventDefault();
    $menu.classList.add("-open");
})

$menuClose.addEventListener("click", event => {
    event.preventDefault();
    $menu.classList.remove("-open");
});