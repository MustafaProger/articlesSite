// function scrollTo(element) {
//     window.scroll({
//         left: 0,
//         top: element.offsetTop,
//         behavior: "smooth",
//     })
// }

// window.onload=function(){

//     let button__iphone = document.querySelector("#hyperlink__1");
//     let article__iphone = document.querySelector("#title__iphone15");

//     button__iphone.addEventListener('click', () => {
//         scrollTo(article__iphone);
//         console.log('Все работает');
//     });
    
// }


// window.addEventListener('scroll', function() {
//     const header = document.querySelector('.header');
//     const hyperlink__1 = document.querySelector('#hyperlink__1');
//     const hyperlink__2 = document.querySelector('#hyperlink__2');
//     const hyperlink__3 = document.querySelector('#hyperlink__3');
//     const hyperlink__4 = document.querySelector('#hyperlink__4');
//     const hyperlink__5 = document.querySelector('#hyperlink__5');
//     const header__logo = document.querySelector('#header__logo');
//     const header__burger = document.querySelector('.header__burger');
//     const scrolled = window.scrollY > 0;
  
//     if(scrolled) {
//         header.classList.add('scrolled');
//         hyperlink__1.classList.add('scrolled');
//         hyperlink__2.classList.add('scrolled');
//         hyperlink__3.classList.add('scrolled');
//         hyperlink__4.classList.add('scrolled');
//         hyperlink__5.classList.add('scrolled');
//         header__logo.classList.add('scrolled');
//         header__burger.classList.add('scrolled');

//     } else {
//         header.classList.remove('scrolled');
//         hyperlink__1.classList.remove('scrolled');
//         hyperlink__2.classList.remove('scrolled');
//         hyperlink__3.classList.remove('scrolled');
//         hyperlink__4.classList.remove('scrolled');
//         hyperlink__5.classList.remove('scrolled');
//         header__logo.classList.remove('scrolled');
//         header__burger.classList.remove('scrolled');
//     }
// });

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $(".header__burger").toggleClass('active');
        $(".header__menu").toggleClass('active');
        $("body").toggleClass('lock')

    });
});

