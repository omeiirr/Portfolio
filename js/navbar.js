const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // When we click on burger button,
  // we need nav-links to get the class 'nav-active'

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animating links
    navLinks.forEach((link, index) => {
      // We will animate the links one-by-one using their indices
      // to control the delay between each one
      // console.log(index);
      if (link.style.animation) {
        // So that animation happens every time menu is opened
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle(`toggle`);
  });
};

navSlide();
