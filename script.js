const navButton = document.querySelector('.nav-mobile');
const navBar = document.querySelector('.navBar');

navButton.addEventListener('click', () => {
  navBar.classList.toggle('active');
});
