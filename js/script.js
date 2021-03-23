// const mobileIcon = document.getElementsByClassName('mobile-nav-icon')[0];
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const mobileNav = document.getElementsByClassName('mobile-nav-overlay')[0];
const webBody = document.getElementsByTagName('BODY')[0];
const navScheduleBtn = document.getElementsByClassName('mobile-nav-btn')[0];


// Arrow rotates when clicked
toggleButton.addEventListener('click', () => {
   toggleButton.classList.toggle('change');
   //add active class to mobileNav
   mobileNav.classList.toggle('active');
   webBody.classList.toggle('active');
})

/*
ADD javascript function to "Schedule a Session button in mobile nav"
   - if "schedule a session" btn is clicked, close the mobile nav (remove the .active class)
*/

navScheduleBtn.addEventListener('click', () => {
   mobileNav.classList.remove('active');
   toggleButton.classList.remove('change');
   webBody.classList.remove('active');
})


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
