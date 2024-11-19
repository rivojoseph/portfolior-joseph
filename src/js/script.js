
/*========== menu icon navbar===========*/




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{

  /*sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top>=offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

      });
    };
  });*/

  /*--------------stick navbar-------------------*/
  let header = document.querySelector('.header');
  let navbar = document.querySelector('.navbar');
  let menuIcon = document.querySelector('#menu-icon');
  header.classList.toggle('sticky',window.scrollY>100);
  navbar.classList.replace('active','rem',window.scrollY>100);
  menuIcon.classList.replace('bx-x','bx-menu',window.scrollY>100);
  /*========== menu icon navbar===========*/
  /*menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');*/


};

/*========== swiper===========*/
/*var swiper = new Swiper(".mySwiper",{
  slidersPerView:1,
  spaceBetween:30,
  loop:true,
  grabCursor: true,
  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/

/*
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = ()=>{
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};*/

/*/!*========== scroll reveal===========*!/
const s1 =ScrollReveal({
  reset:true,
  distance: '80px',
  duration:2000,
  delay:200
});*/
/*s1.reveal('.home-content, .heading',{origin:'top'});
s1.reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper,.contact form',{origin:'bottom'});
s1.reveal('.home-content h1, .about-img img',{origin:'left'});
s1.reveal('.home-content h3, .about-content',{origin:'right'});

const s2 =ScrollReveal({
  reset:true,
  distance: '75px',
  duration:1500,
  delay:200
});
s2.reveal('',{origin:'top'});
s2.reveal('',{origin:'bottom'});
s2.reveal('.about-content a.btn',{origin:'left'});
s2.reveal('.home-content p',{origin:'right'});

/!*========== typed===========*!/
const type = new Typed('.multiple-text',{
  strings:['Frontend Developer','Backend Developer','Designer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop: true
});*/







