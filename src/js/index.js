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

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $(".header__burger").toggleClass('active');
        $(".header__menu").toggleClass('active');
        $("body").toggleClass('lock')
    });
});
