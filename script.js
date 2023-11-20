"use strict";

// ELEMENTS

const header = document.querySelector(".header");

const nav = document.querySelector(".navbar");
const navBarBrand = document.querySelector('.navbar-brand');
const navBarContainer = document.querySelector(".navbar-nav");
const navItems = document.querySelectorAll(".nav-item");
const navHeight = nav.getBoundingClientRect().height;

const tabs = document.querySelectorAll(".services__tab");
const tabContainer = document.querySelector(".services__tab-container");
const tabContent = document.querySelectorAll(".services__content");

const carsContainer = document.querySelector(".cars__button-container");
const carsBtn = document.querySelectorAll(".cars__button");
const carsImg = document.querySelectorAll(".cars__img-container");
const carsDetails = document.querySelectorAll(".cars__details-container");

const section = document.querySelectorAll(".section");
const carsSection = document.querySelector('#section--3');

const btnDiscoverNow = document.querySelector('.discover-now');
const btnReserveNow = document.querySelector('.btn-reserve');


//SCROLL DISCOVER NOW BTN TO CARS SECTION
btnDiscoverNow.addEventListener('click', function(e){
    e.preventDefault();
    carsSection.scrollIntoView({behavior: 'smooth'}); 
})

//SCROLL INTO HOME VIEW
navBarBrand.addEventListener('click' , function(e){
    const clicked = e.target.closest('.navbar-brand');
    // if (!clicked) return;
    console.log("clickk");
    if(clicked){
        e.preventDefault();
        document.querySelector('#section--1').scrollIntoView({behavior: 'smooth'});
        navItems.forEach((item) => item.classList.remove('active'));
    }

})


//NAV BAR ITEMS CHANGE
navBarContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav-item");
  if (!clicked) return;
  console.log(clicked);
  // remove active class from all items
  navItems.forEach((item) => item.classList.remove("active"));
  // add active class to the selected item
  clicked.classList.add("active");
});

//PAGE TABS SECTION 2

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".services__tab");
  if (!clicked) return; //stop the fn from running all together
  console.log("Clicked");

  // remove active classs from tab and content
  tabs.forEach((tab) => tab.classList.remove("services__tab--active"));
  tabContent.forEach((c) => c.classList.remove("services__content--active"));

  //active tab
  clicked.classList.add("services__tab--active");

  //active content
  document
    .querySelector(`.services__content--${clicked.dataset.tab}`)
    .classList.add("services__content--active");
});

carsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".cars__button");

  if (!clicked) return;
  console.log("clicked btn");

  carsBtn.forEach((btn) => btn.classList.remove("cars__button-active"));
  carsImg.forEach((img) => img.classList.remove("cars__img-active"));
  carsDetails.forEach((det) => det.classList.remove("cars__details-active"));

  //active btn
  clicked.classList.add("cars__button-active");

  //active img
  document
    .querySelector(`.cars__img-${clicked.dataset.tab}`)
    .classList.add("cars__img-active");

  //active details
  document
    .querySelector(`.cars__details-${clicked.dataset.tab}`)
    .classList.add("cars__details-active");
});

// SCROLL NAV LINKS TO SECTIONS

navBarContainer.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    let id = e.target.getAttribute("href");
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//INTERSECTING OBSERVE API

const obsCall = function (entries) {
  //get first element of entries
  const [entry] = entries;
  console.log(entry);

  //check if intersecting is false
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const obsObj = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const obsNav = new IntersectionObserver(obsCall, obsObj);

obsNav.observe(header);

//  OPEN EMAIL CHAT
function openEmailClient() {
    const emailAddress = 'artan.kulla@outlook.com'; 
    window.location.href = `mailto:${emailAddress}`;
}

// Open Instagram profile in a new tab
function openInstagram() {
    window.open('https://www.instagram.com/car_rental_reimen/', '_blank');
}

// Add event listener for email link
const emailLink = document.querySelector('.footer__contact a[href^="mailto"]');
if (emailLink) {
    emailLink.addEventListener('click', function (e) {
        e.preventDefault();
        openEmailClient();
    });
}

//OPEN WP CHAT WHEN RESERVE BTN IS CLICK

btnReserveNow.addEventListener('click',function(e){
    e.preventDefault();
    window.open('https://wa.me/+355682055335', '_blank');

})
