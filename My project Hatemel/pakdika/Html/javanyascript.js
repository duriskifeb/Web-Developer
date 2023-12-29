//togle class active 
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger di klilk 
document.querySelector('#hamburger-menu').onclik = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk mengklik navbar 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});