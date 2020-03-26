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

//create array with the sections in it
const sectionNumber = document.getElementsByClassName('landing__container');
// Build menu 
/* First make ul using createElement 
than apply the <a> on the list items you'll be creating for that ul
and appending the <li> using appendChild */
document.body.onload = addElement;

function addElement(){    
    for (let i=0; i<sectionNumber.length; i++) {
        //create a new li element
        let listLi = document.createElement("li");

        // Make the 'section' number
        // Add 1 to the section, to build the correct section number 'text' in the nav menu
        let j = i + 1
        // make the text for the nav menu section(s) 
        let linkText = document.createTextNode("section" + j + " ");
        
        listLi.innerHTML+= "<li>";
        //listLi.innerHTML+= "<a href='' onclick='sectionScroll(linkText)'>" + linkText; 
        listLi.innerHTML+= "<a href='' onclick='sectionScroll(linkText)'>linkText";
        listLi.innerHTML+= "</a>";
        listLi.innerHTML+= "</li>";
        
        // Make a variable with the specific element in the HTML - to populate the list with
        let menuElement = document.getElementById("navbar__list");
        // add the newly created element and its content into the DOM   
        menuElement.appendChild(listLi);
        
        // add a class called menu__link to the element
        menuElement.classList.add("menu__link"); 
    }  
    return false; 
}

// Add in an onclick attribute within each new <a> tag created in the addElement function above 
function attachClickEvent(){
    // Get all of the elements with className 'menu__link'. It returns an array
    let sectionList = document.getElementsByClassName('menu__link');
    
    // Get the length of the above array
    let listLength = sectionList.length;
    let i = 0;

    for (i=0;i<listLength;i++){
        sectionList[i].addEventListener("click", sectionScroll(sectionNumber));
    }   
}

// Find a way to access each individual section, outside of the for loop, and then use the function below to scroll

//menuElement.onclick = sectionScroll(linkText); 
// document.getElementById("newId").addEventListener("click", sectionScroll(tagName, sectionNumber));
        
/* menuElement.addEventListener("click", sectionScroll(linkText)); */
//create an onclick
//liA.onclick = "sectionScroll('section1')";

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

