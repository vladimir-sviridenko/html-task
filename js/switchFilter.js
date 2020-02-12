const filter = document.querySelector(".filter");
const filterSwitcher = filter.querySelector(".filter__icon-squares");
const menu = filter.querySelector(".filter__menu");
const menuItems = menu.querySelectorAll(".filter__tag");

setStartPosition(menuItems);

filterSwitcher.addEventListener("click", function () {
  if (menu.classList.contains("filter__menu_hidden")) {
    setFinishPosition(menuItems);
    menu.classList.remove("filter__menu_hidden");
    filterSwitcher.classList.add("filter__icon-squares_active");
  } else {
    setStartPosition(menuItems);
    menu.classList.add("filter__menu_hidden");
    filterSwitcher.classList.remove("filter__icon-squares_active");
  }
});

menuItems[menuItems.length - 1].addEventListener("transitionend", function () {
  if (menu.classList.contains("filter__menu_hidden")) {
    filterSwitcher.removeAttribute("style");
  } else {
    filterSwitcher.style.opacity = 0.3;
  }
});

function setStartPosition(menuItems) {
  Array.from(menuItems).reverse().forEach((item, index, items) => {
    item.style.transform = `translateY(-10px)`;
    item.style.opacity = 0;
  });
}

function setFinishPosition() {
  menuItems.forEach((item, index) => {
    item.style.transition = `transform 0.25s ${0.36 + (index * 0.045)}s, opacity 0.25s ${0.36 + (index * 0.05)}s`;
    item.style.transform = `translateY(0px) `;
    item.style.opacity = 1;
  });
}