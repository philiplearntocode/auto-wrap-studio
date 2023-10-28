
var header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 0) {
    header.classList.add('shadow-2xl');
  } else {
    header.classList.remove('shadow-2xl');
  }
});
