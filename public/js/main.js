"use strict";
const $ = document;

const backdrop = $.querySelector('.backdrop');
const sideDrawer = $.querySelector('.mobile-nav');
const menuToggle = $.querySelector('#side-menu-toggle');

function backdropClickHandler() {
    backdrop.style.display = 'none';
    sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
    backdrop.style.display = 'block';
    sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);
