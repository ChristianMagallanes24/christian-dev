const navButton = document.querySelector('.nav-mobile');
const navBar = document.querySelector('.navBar');
const box = document.getElementById("box");
const test = document.getElementById('test');

navButton.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

