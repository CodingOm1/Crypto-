const hamburger = document.querySelector("#hamburger");
const linktab = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  linktab.classList.toggle("open");
});
const body = document.body,
  scrollWrap = document.getElementsByClassName("main")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.screenY - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

feather.replace();
