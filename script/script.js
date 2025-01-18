
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

var igButton = document.getElementsByClassName('ig-button');
var fbButton = document.getElementsByClassName('fb-button');
var tiktokButton = document.getElementsByClassName('tiktok-button');
var igImg = document.getElementsByClassName('ig-img');
var fbImg = document.getElementsByClassName('fb-img');
var tiktokImg = document.getElementsByClassName('tiktok-img');

var whatsappButton = document.getElementsByClassName('whatsapp-button')[0];
var whatsappImg = document.getElementById('whatsapp-img');

function hoverChangeIcon(buttons, images, initialImg, hoverImg) {
  Array.from(buttons).forEach((button, index) => {
    button.addEventListener('mouseover', () => {
      images[index].src = hoverImg;
    });
    button.addEventListener('mouseout', () => {
      images[index].src = initialImg;
    });
  });
}

hoverChangeIcon(
  igButton,
  igImg,
  './assets/icons/insta/insta_initial.svg',
  './assets/icons/insta/insta_hover.svg',
);

hoverChangeIcon(
  fbButton,
  fbImg,
  './assets/icons/fb/fb_initial.svg',
  './assets/icons/fb/fb_hover.svg',
);

hoverChangeIcon(
  tiktokButton,
  tiktokImg,
  './assets/icons/tiktok/tiktok_initial.svg',
  './assets/icons/tiktok/tiktok_hover.svg',
);

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

const servicesTextList = [
  `We offer expert PPF installation, premium car wraps, and custom designs to enhance and protect your
          vehicle's style.
          Transform your ride with our top-notch services!`,
  `PPF installation protects against scratches and UV damage, keeping your car looking new while simplifying
              maintenance!`,
  `Car wraps provide a cost-effective way to change your vehicle's appearance without a permanent paint job,
  allowing for creative designs and colours.They also protect the original paint from scratches and UV
damage!`,
  ``,
];

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
  var textContent = servicesContent[currentIndex].children[1];
  var textDisplay = textContent.children[1];
  textDisplay.textContent = servicesTextList[currentIndex];
  textDisplay.classList.remove('opacity-0');
  textDisplay.classList.add('opacity-100');

  var blackBg = servicesContent[currentIndex].children[0];
  blackBg.classList.remove('bg-opacity-20');
  blackBg.classList.add('bg-opacity-30');

  servicesContent[currentIndex].classList.remove('grow');
  servicesContent[currentIndex].classList.add('grow-[1.5]');

  if (selectedPrevServiceContent != -1) {
    var textContentPrev = servicesContent[selectedPrevServiceContent].children[1];
    var textDisplayPrev = textContentPrev.children[1];
    textDisplayPrev.textContent = '';
    textDisplayPrev.classList.remove('opacity-100');
    textDisplayPrev.classList.add('opacity-0');

    var blackBgPrev = servicesContent[selectedPrevServiceContent].children[0];
    blackBgPrev.classList.remove('bg-opacity-30');
    blackBgPrev.classList.add('bg-opacity-20');

    servicesContent[selectedPrevServiceContent].classList.remove('grow-[1.5]');
    servicesContent[selectedPrevServiceContent].classList.add('grow');
  }
}

// Copyright © 2025 Auto Wrap Studio Sdn. Bhd. (business no.)
var copyrightText = document.getElementById('copyright-text');
// full year
const d = new Date();
let year = d.getFullYear();
copyrightText.innerText = `Copyright © ${year} Auto Wrap Studio Sdn. Bhd. (business no.)`
