const sr_logo = ScrollReveal({
  distance: "35px",
  duration: 2400,
  reset: true,
});

sr_logo.reveal(".logo_container", { delay: 210, origin: "left" });

// BURGERMENU
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});

const sr_card_left = ScrollReveal({
  distance: "35px",
  duration: 2400,
  reset: true,
});

sr_card_left.reveal(".project_cards > div, .project_cards > a", { delay: 20, origin: "left" });

const sr_card_right = ScrollReveal({
  distance: "35px",
  duration: 500,
  reset: true,
});

sr_card_right.reveal(".", { delay: 20, origin: "left" });

// SCROLL KNAP
function scrollDown() {
  window.scrollBy({
    top: 800,
    behavior: "smooth",
  });
}
