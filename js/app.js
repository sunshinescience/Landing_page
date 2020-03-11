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
/* First make ul using createElement 
than apply the <a> on the list items you'll be creating for that ul
and appending the <li> using appendChild */
document.body.onload = addElement;

function addElement(){
    //create array with the sections in it
    const sectionNumber = document.getElementsByClassName('landing__container');
    for (let i=0; i<sectionNumber.length; i++) {
        //create a new li element
        let listLi = document.createElement('li');
        //create a new a tag
        let newA = document.createElement('a');
        //create a variable to append an <a> to a list
        let liA = listLi.appendChild(newA);
        // Add 1 to the section, to build the correct section number in the nav menu
        let j = i + 1
        // make the text for the nav menu section(s) 
        let linkText = document.createTextNode("section" + j);
        // append text to list
        let newElement = liA.appendChild(linkText);

        let secName = document.getElementById("navbar__list");
        // add the newly created element and its content into the DOM   
        secName.appendChild(newElement);

        //create an onclick
        //liA.onclick = "sectionScroll('section1')";
    }
}

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

