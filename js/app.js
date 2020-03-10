/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
/* Can you listen for an event in the aspect that if a section is written in HTML, then you add it to the nav menu? */

// Scroll to section on link click
function sectionScroll(sectionNumber) {
    var elmnt = document.getElementById(sectionNumber);
    return elmnt.scrollIntoView({behavior: "smooth"});
}

// Set sections as active
/* Step 1: Get element's position in relation to top of the viewport 

Or, instead, perhaps use:  
Execute a JavaScript when a <div> element is being scrolled:
<div onscroll="myFunction()"> 

Better yet, listen to a scroll event, so use: object.addEventListener("scroll", myScript);

And if a certain section is scrolled to, then highlight it!
*/

