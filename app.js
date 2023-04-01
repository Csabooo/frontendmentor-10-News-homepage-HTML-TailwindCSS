const btn = document.getElementById('menu-btn');
const close_btn = document.getElementById('close');
const menu = document.getElementById('hamburger-menu-list');
const overlay = document.getElementById('overlay');


btn.addEventListener('click', navToggle);
close_btn.addEventListener('click', navToggle);

function navToggle() {
  close_btn.classList.toggle("hidden");
  btn.classList.toggle("hidden");
  menu.classList.toggle('hidden');
  overlay.classList.toggle("show"); 

}



