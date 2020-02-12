const openButton = document.querySelector(".icon-burger");
const menu = document.querySelector(".menu-mobile");
const closeButton = menu.querySelector(".icon-close");
const navBarLinks = menu.querySelectorAll(".menu-mobile__nav-bar > a");
const socialButtons = menu.querySelector(".menu-mobile__social");

const menuItems = getOrderedMenuItems();
hide(menuItems);

openButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", closeMenu);

navBarLinks.forEach((link) =>
  link.addEventListener("click", closeMenu)
);

function openMenu() {
  addOpenTransition(menuItems);
  show(menuItems);
  menu.classList.add("menu-mobile_visible");
}

function closeMenu() {
  removeOpenTransition(menuItems);
  hide(menuItems);
  menu.classList.remove("menu-mobile_visible");
}

function getOrderedMenuItems() {
  let menuItems = [];

  menuItems.push(closeButton);
  menuItems.push(...navBarLinks);
  menuItems.push(socialButtons);

  return menuItems;
}

function hide(menuItems) {
  menuItems.forEach((item) => {
    item.style.opacity = 0;
  });
}

function show(menuItems) {
  menuItems.forEach((item) => {
    item.style.opacity = 1;
  });
}

function addOpenTransition(menuItems) {
  menuItems.forEach((item, index) => {
    item.style.transition = `color 0.3s,  opacity 0.3s ${0.1 + (index * 0.05)}s`;
  });
}

function removeOpenTransition(menuItems) {
  menuItems.forEach((item) => {
    item.style.transition = "color 0.3s, opacity 0.6s";
  });
}
