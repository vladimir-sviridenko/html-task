const header = document.querySelector(".header-wrapper");
const darkLogo = header.querySelector(".logo__image_dark");
const lightLogo = header.querySelector(".logo__image_light");
const burgerButton = header.querySelectorAll(".icon-burger__row");
const navLinks = header.querySelectorAll(".nav-bar__link");

checkScrollPosition();

window.addEventListener("scroll", checkScrollPosition);

function showTransparentHeader() {
  header.style.backgroundColor = "transparent";
  burgerButton.forEach((burgerRow) => {
    burgerRow.classList.remove("icon-burger__row_dark");
  });
  darkLogo.style.opacity = 0;
  lightLogo.style.opacity = 1;
  navLinks.forEach((link) => {
    link.classList.remove("nav-bar__link_dark");
  });
}

function showWhiteHeader() {
  burgerButton.forEach((burgerRow) => {
    header.style.backgroundColor = "white";
    burgerRow.classList.add("icon-burger__row_dark");
  });
  darkLogo.style.opacity = 1;
  lightLogo.style.opacity = 0;
  navLinks.forEach((link) => {
    link.classList.add("nav-bar__link_dark");
  });
}

function checkScrollPosition() {
  if (window.pageYOffset < 50) {
    showTransparentHeader();
  } else {
    showWhiteHeader();
  }
}

