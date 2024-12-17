
var header = document.getElementsByTagName('header')[0];
window.addEventListener('scroll', (e) => {
  if (window.scrollY > 0) {
    header.classList.add('shadow-2xl');
  } else {
    header.classList.remove('shadow-2xl');
  }
});

// services, our work, visit us
var serviceBtn = document.getElementById('service-btn');
var ourWorkBtn = document.getElementById('our-work-btn');
var visitUsBtn = document.getElementById('visit-us-btn');

const normalUI = ['before:border-border-main', 'before:w-1/2'];
const hoverUI = ['before:border-aws-yellow'];

function navButtonMouseOver(element) {
  element.classList.remove(...normalUI);
  element.classList.add(...hoverUI);
};

function navButtonMouseOut(element) {
  element.classList.remove(...hoverUI);
  element.classList.add(...normalUI);
}

serviceBtn.addEventListener('mouseover', (_) => {
  navButtonMouseOver(serviceBtn);
});
serviceBtn.addEventListener('mouseout', (_) => {
  navButtonMouseOut(serviceBtn);
});
serviceBtn.addEventListener('click', (_) => {
  // TODO: navigate to service part
});

ourWorkBtn.addEventListener('mouseover', (_) => {
  navButtonMouseOver(ourWorkBtn);
});
ourWorkBtn.addEventListener('mouseout', (_) => {
  navButtonMouseOut(ourWorkBtn);
});
ourWorkBtn.addEventListener('click', (_) => {
  // TODO: navigate to our work part
});

visitUsBtn.addEventListener('mouseover', (_) => {
  navButtonMouseOver(visitUsBtn);
});
visitUsBtn.addEventListener('mouseout', (_) => {
  navButtonMouseOut(visitUsBtn);
});
visitUsBtn.addEventListener('click', (_) => {
  // TODO: navigate to visit us part
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

// Explore More button
var exploreMoreBtn = document.getElementById('explore-more-btn');
var exploreMoreIcon = document.getElementById('explore-more-icon');

exploreMoreBtn.addEventListener('mouseover', (_) => {
  exploreMoreBtn.classList.add('bg-black');
  exploreMoreIcon.src = './assets/icons/arrow_right_white.svg';
});

exploreMoreBtn.addEventListener('mouseout', (_) => {
  exploreMoreBtn.classList.remove('bg-black');
  exploreMoreIcon.src = './assets/icons/arrow_right.svg';
});


var servicesContent = document.getElementsByClassName('service-content');

// Default serviceContent
var selectedServiceContent = 1;

// 0 -> right
// 1 -> left & right
// 2 -> left
const animationStretchBehaviour = { 0: "Fiat", 1: "500", 2: "white" };

// all servicesContent, when hover to any, set the
for (let i = 0; i < servicesContent.length; i++) {
  // servicesContent[i].addEventListener('mouseover', (_) => {
  //   // on hover on specific index
  //   if (selectedServiceContent == i) return;
  //   selectedServiceContent = i;

  //   servicesContent[i];
  //   // show text, darken bgOpacity, grow to 1.5, stretch depending on index
  // });

  console.log(`ServiceContent: ${i} ${servicesContent[i].children}`);
  servicesContent[i].children;
  for (let j = 0; j < servicesContent[i].children.length; j++) {
    console.log(`ClassList: ${servicesContent[i].children[j].className}`);
    console.log(`ClassList: ${servicesContent[i].children[j].classList.contains('display-text')}`);
  }
  // hide text, bright back bgOpacity, grow back to normal, restretch back


  // servicesContent[i].addEventListener('mouseout')
}