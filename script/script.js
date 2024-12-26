
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
var selectedPrevServiceContent = -1;

// 0 -> right
// 1 -> left & right
// 2 -> left
const animationStretchBehaviour = { 0: "Fiat", 1: "500", 2: "white" };


showCurrentServiceContentEffect(selectedServiceContent);

// all servicesContent, when hover to any, set the
for (let i = 0; i < servicesContent.length; i++) {
  servicesContent[i].addEventListener('mouseover', (_) => {
    // on hover on specific index
    if (selectedServiceContent == i) return;
    selectedPrevServiceContent = selectedServiceContent;
    selectedServiceContent = i;

    showCurrentServiceContentEffect(i);
  });
}

function showCurrentServiceContentEffect(currentIndex) {
  servicesContent[currentIndex].classList.remove('grow');
  servicesContent[currentIndex].classList.add('grow-[1.5]');

  var blackBg = servicesContent[currentIndex].children[0];
  blackBg.classList.remove('bg-opacity-20');
  blackBg.classList.add('bg-opacity-30');

  var textContent = servicesContent[currentIndex].children[1];
  var textDisplay = textContent.children[1];
  textDisplay.classList.remove('opacity-0');
  textDisplay.classList.add('opacity-100');

  if (selectedPrevServiceContent != -1) {
    servicesContent[selectedPrevServiceContent].classList.remove('grow-[1.5]');
    servicesContent[selectedPrevServiceContent].classList.add('grow');

    var blackBgPrev = servicesContent[selectedPrevServiceContent].children[0];
    blackBgPrev.classList.remove('bg-opacity-30');
    blackBgPrev.classList.add('bg-opacity-20');

    var textContentPrev = servicesContent[selectedPrevServiceContent].children[1];
    var textDisplayPrev = textContentPrev.children[1];
    textDisplayPrev.classList.remove('opacity-100');
    textDisplayPrev.classList.add('opacity-0');
  }
}