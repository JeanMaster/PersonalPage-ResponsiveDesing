// console.log("hola mundo");
// console.log(document.querySelector(".menu"));
// document.querySelector(".menu").classList.add("is-active");

const ipad = window.matchMedia("screen and (max-width: 767px")
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burger-menu");
// menu.classList.add("is-active");
ipad.addListener(validation);
function validation(event) {
  if (event.matches){
    burgerButton.addEventListener("click", hideShow);
  }
    else
    {
      burgerButton.removeEventListener("click", hideShow);
}
validation(ipad);

    console.log(event.matches);
}
function hideShow() {
  if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
    }
  else {
      menu.classList.add("is-active");
      }
}
