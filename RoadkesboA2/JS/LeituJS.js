let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx');  
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx'); 
  navbar.classList.remove('active');
}