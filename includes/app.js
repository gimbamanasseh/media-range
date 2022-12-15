// ********** set date, footer ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links nanv toggle ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    //back to top 
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
    link.addEventListener("click", function(e){
        //prevent default smoothscroll - HTMl & CSS
        e.preventDefault();
        //scroll to specific sections of the page dynamically
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //calculate the height of the sections
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;
        //refactor with condition to toggle when navbar is fixed n not
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 85) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

// *******slider********
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {
    // woorking with slide buttons
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
prevBtn.style.display = "none";

// services tabs
// selectors inside the element
const services = document.querySelectorAll(".service");
services.forEach(function (service) {
    const btn = service.querySelector(".service-btn");
    btn.addEventListener("click", function () {
        services.forEach(function (item) {
            if (item !== service) {
                item.classList.remove("show-text");
            }
        });
        service.classList.toggle("show-text");
    });
});