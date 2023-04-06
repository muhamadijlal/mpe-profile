const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener('click', function(){
  menu.classList.toggle("menu-active");
  menu.classList.toggle("menu-unactive");
});

// Click diluar Hamburger
window.addEventListener('click', function(e) {
  if(e.target != hamburger && e.target != menu){
    menu.classList.add('menu-unactive');
    menu.classList.remove('menu-active');
  }
});