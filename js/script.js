const openMenu = document.getElementsByClassName('mobile-nav-icon')[0];
const mobileNavOverlay = document.getElementsByClassName('mobile-nav-overlay')[0];
const closeMenu = document.getElementsByClassName('mobile-nav-icon-open')[0];


/*
   MOBILE NAVIGATION TOGGLE:

   1. Hide original Navigation [DONE]
   2. User clicks on arrow icon
         2a. Display (toggle on) .mobile-nav-icon-open
            - add .active class on mobile-nav-icon-open

   3. User clicks the menu icon; User clicks outside of menu:
         3a. Hide (turn) off) .mobile-nav-icon-open
            - remove .active class on mobile-nav-icon-open

*/


// Target the .mobile-nav-icon
// const mobileNavIcon = document.getElementsByClassName('mobile-nav-icon');
//
// let toggleOn = function() {
//
//    mobileNavIcon.addEventListener('click', () => {
//       // if user clicks mobileNavIcon
//
//       // nav will display
//       .navbar nav ()
//    })
// }
//
// if
//    mobileNavIcon.addEventListener('click', () => {
//       // if user clicks mobileNavIcon
//       if ()
//       // .navbar = display:flex
//    })
