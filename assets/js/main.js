window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // for menu burger
    let burger = document.querySelector('.burger');

    burger.addEventListener('click', function () {
        document.querySelectorAll(".burger__line")[0].classList.toggle("burger__one-active");
        document.querySelectorAll(".burger__line")[1].classList.toggle("burger__two-active");
        document.querySelectorAll(".burger__line")[2].classList.toggle("burger__three-active");
        document.querySelector(".menu-mobile").classList.toggle("menu-mobile__active");
    });

   

});