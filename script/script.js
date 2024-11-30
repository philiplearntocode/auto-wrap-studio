
var header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 0) {
    header.classList.add('shadow-2xl');
  } else {
    header.classList.remove('shadow-2xl');
  }
});

var igButton = document.getElementsByClassName('ig-button')[0];
var fbButton = document.getElementsByClassName('fb-button')[0];
var tiktokButton = document.getElementsByClassName('tiktok-button')[0];
var whatsappButton = document.getElementsByClassName('whatsapp-button')[0];
var igImg = document.getElementById('ig-img');
var fbImg = document.getElementById('fb-img');
var tiktokImg = document.getElementById('tiktok-img');
var whatsappImg = document.getElementById('whatsapp-img');

// Instagram
igButton.addEventListener('mouseover', (_) => {
  igImg.src = './assets/icons/insta/insta_hover.svg';
});
igButton.addEventListener('mouseout', (_) => {
  igImg.src = './assets/icons/insta/insta_initial.svg';
});

// Facebook
fbButton.addEventListener('mouseover', (_) => {
  fbImg.src = './assets/icons/fb/fb_hover.svg';
});
fbButton.addEventListener('mouseout', (_) => {
  fbImg.src = './assets/icons/fb/fb_initial.svg';
});

// Tiktok
tiktokButton.addEventListener('mouseover', (_) => {
  tiktokImg.src = './assets/icons/tiktok/tiktok_hover.svg';
});
tiktokButton.addEventListener('mouseout', (_) => {
  tiktokImg.src = './assets/icons/tiktok/tiktok_initial.svg';
});

// Get Whatsapp Button, & whatsappImg
whatsappButton.addEventListener('mouseover', (_) => {
  whatsappImg.src = './assets/icons/whatsapp/whatsapp_hover.svg';
});
whatsappButton.addEventListener('mouseout', (_) => {
  whatsappImg.src = './assets/icons/whatsapp/whatsapp_initial.svg';
});