/* MEU CÓDIGO MENU MOBILE
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
*/

/* IMPLEMENTAÇÃO DO MARCO PARA MENU MOBILE */
const $headerStore = document.querySelector(".header-store");
const $list = $headerStore.querySelector(".list");
const $menu = $headerStore.querySelector(".-menu");


$menu.addEventListener("click", () => {
    $list.classList.toggle("-active");

});
/* //////////////////////////////////////// */