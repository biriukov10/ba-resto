'use strict';
// task for menu color
let menuLink = document.querySelectorAll('.ba-menu__link');
window.addEventListener('scroll', function () {
  for (let i = 1; i < menuLink.length - 3; i++) {
    if (window.pageYOffset > 661) {
      menuLink[i].style.color = 'red';
    } else {
      menuLink[i].style.color = 'inherit';
    }
  }
});


// task for header fixed menu
window.addEventListener('scroll', function () {
  let header = document.querySelector('.ba-header');
  let hero = document.querySelector('.ba-hero');
  if (window.pageYOffset > 114) {
    header.classList.add('ba-header-fix');
    hero.classList.add('top-header');
  } else {
    header.classList.remove('ba-header-fix');
    hero.classList.remove('top-header');
  }
});

