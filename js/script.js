const mobileIcon = document.getElementsByClassName('mobile-nav-icon')[0];
const mobileNav = document.getElementsByClassName('mobile-nav-overlay')[0];

/*
   MOBILE NAVIGATION TOGGLE:
   1. Hide original Navigation [DONE]
   2. User clicks on arrow icon
         2a. Display (toggle on) .mobile-nav-icon-open
            - toggle on .active class on mobile-nav-icon-open
            - Arrow transform: rotates 180 degrees when clicked on

   3. User clicks the menu icon; User clicks outside of menu:
         3a. Hide (toggle off) .mobile-nav-icon-open
            - toggle off .active class on mobile-nav-icon-open
            - Arrow transform: rotates back

*/


// Arrow rotates when clicked
mobileIcon.addEventListener('click', () => {
   mobileIcon.classList.toggle('change');
   //add active class to mobileNav
   mobileNav.classList.add('active');
})

// When arrow is clicked
   // Add .active class to mobileNav

   // if .active is on mobileNav AND the mobileIcon is clicked:
      //close mobileNav



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
