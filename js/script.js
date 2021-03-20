/*
   MOBILE NAVIGATION TOGGLE:

   1. Hide original Navigation [DONE]
   2. User clicks on arrow icon
         2a. Display (turn on) .mobile-nav-icon-open
            - add .active class on mobile-nav-icon-open

   3. User clicks the menu icon; User clicks outside of menu:
         3a. Hide (turn off) .mobile-nav-icon-open
            - remove .active class on mobile-nav-icon-open

*/

const openMenu = document.getElementsByClassName('mobile-nav-icon')[0];
const mobileNavOverlay = document.getElementsByClassName('mobile-nav-overlay')[0];
const closeMenu = document.getElementsByClassName('mobile-nav-icon-open')[0];


// turn on mobile nav
openMenu.addEventListener('click', () => {
   mobileNavOverlay.classList.add('active');
})

// turn off mobile nav
closeMenu.addEventListener('click', () => {
   mobileNavOverlay.classList.remove('active');
})
