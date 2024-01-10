const sr = ScrollReveal({
  distance: "35px",
  duration: 2400,
  reset: true,
});

sr.reveal(".logo", { delay: 210, origin: "left" });

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navlink");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Fjern 'active' klassen fra alle links
      navLinks.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });

      // Tilføj 'active' klassen til det klikkede link
      link.classList.add("active");
    });

    // Tjek om linket repræsenterer den aktuelle side
    if (window.location.href.indexOf(link.href) > -1) {
      link.classList.add("active");
    }
  });
});

// BURGERMENU
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
