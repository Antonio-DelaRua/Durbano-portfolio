/*==== toogle icon navbar ====*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/*==== scroll sections active link ====*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });


    /*==== sticky navbar ====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==== remove toggle icon and navbar when click navbar link (scroll) ====*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};


/*==== scroll reveal ====*/

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, about-content', { origin: 'right' });

/*==== typed js ====*/

const typed = new Typed('.multiple-text', {
    strings: ['DevOps Developer', 'CI/CD Developer', 'Cloud Developer','ALM', 'DevSecOps Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



/*==== Cookies ====*/

document.cookie = "nombre_cookie=valor_cookie; expires=Thu, 22 Jun 2023 12:00:00 UTC; path=/; domain=durbanod.com; secure; SameSite=Strict";

const popupButton = document.getElementById("popup-button");
const popupOverlay = document.getElementById("popup-overlay");
const popupContent = document.getElementById("popup-content");
const closeButton = document.getElementById("close-button");

popupButton.addEventListener("click", function() {
  popupOverlay.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popupOverlay.style.display = "none";
});


