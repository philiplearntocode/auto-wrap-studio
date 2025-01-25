
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
// transition-all duration-700
const servicesHoverTransition = Object.freeze({
  textOpacityHover: 'opacity-100',
  textDisplaysTranslate: 'translate-x-[50%]',
  textDisplaysMargin: 'mx-6',
  textChildrenTranslate: 'translate-x-[-50%]',
  textTitleScaleHover: 'scale-125',
  bgOpacityHover: 'bg-opacity-50',
  sizeHover: 'grow-[1.5]',
});
// translate-x-[50%]
// TODO: (P) change remove and add class to toggle, just code init state in html

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

// #(onHover)
// grow 1 -> 1.5, 
// text opacity 0 -> 100 (non visible to visible), [ADD TRANSITION ANIMATION]
// bg opacity 20 -> 30 (darker), [ADD OPACITY ANIMATION]
// NEW: text scale animation, text appear animation
function showCurrentServiceContentEffect(currentIndex) {
  var blackBg = servicesContent[currentIndex].children[0];
  var textDisplays = servicesContent[currentIndex].children[1];

  textDisplays.classList.toggle(servicesHoverTransition.textDisplaysTranslate);
  textDisplays.classList.toggle(servicesHoverTransition.textDisplaysMargin);

  blackBg.classList.toggle(servicesHoverTransition.bgOpacityHover);

  var textTitle = textDisplays.children[0];
  var textSubtitle = textDisplays.children[1];

  textTitle.classList.toggle(servicesHoverTransition.textChildrenTranslate);
  textTitle.classList.toggle(servicesHoverTransition.textTitleScaleHover);

  textSubtitle.textContent = servicesTextList[currentIndex];
  textSubtitle.classList.toggle(servicesHoverTransition.textChildrenTranslate);
  textSubtitle.classList.toggle(servicesHoverTransition.textOpacityHover);

  servicesContent[currentIndex].classList.toggle(servicesHoverTransition.sizeHover);

  if (selectedPrevServiceContent != -1) {
    var blackBgPrev = servicesContent[selectedPrevServiceContent].children[0];
    var textDisplaysPrev = servicesContent[selectedPrevServiceContent].children[1];

    textDisplaysPrev.classList.toggle(servicesHoverTransition.textDisplaysTranslate);
    textDisplaysPrev.classList.toggle(servicesHoverTransition.textDisplaysMargin);

    blackBgPrev.classList.toggle(servicesHoverTransition.bgOpacityHover);

    var textTitlePrev = textDisplaysPrev.children[0];
    var textSubtitlePrev = textDisplaysPrev.children[1];

    textTitlePrev.classList.toggle(servicesHoverTransition.textChildrenTranslate);
    textTitlePrev.classList.toggle(servicesHoverTransition.textTitleScaleHover);

    textSubtitlePrev.textContent = '';
    textSubtitlePrev.classList.toggle(servicesHoverTransition.textChildrenTranslate);
    textSubtitlePrev.classList.toggle(servicesHoverTransition.textOpacityHover);

    servicesContent[selectedPrevServiceContent].classList.toggle(servicesHoverTransition.sizeHover);
  }
}

// Copyright © 2025 Auto Wrap Studio Sdn. Bhd. (business no.)
var copyrightText = document.getElementById('copyright-text');
// full year
const d = new Date();
let year = d.getFullYear();
copyrightText.innerText = `Copyright © ${year} Auto Wrap Studio Sdn. Bhd. (business no.)`
