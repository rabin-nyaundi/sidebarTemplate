const btn = document.querySelector('.aside-toggle');

const sidebar = document.querySelector('.aside');

const nav = document.querySelector('.nav');
const main =document.querySelector('.main')

btn.addEventListener('click', function() {
    
    sidebar.classList.toggle('hide-sidebar');
    nav.classList.toggle('toggle-navbar')
    main.classList.toggle('toggle-main')

    console.log('Yesss')
    
});

const navbar_toggle = document.querySelector('.nav-toggle');

const nav_links = document.querySelector('.social-media-icons')

navbar_toggle.addEventListener('click', () => {
    nav_links.classList.toggle('show-nav-links')
})