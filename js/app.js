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

document.body.onload = addElement;

// Function to dynamically build navigation menu
function addElement(){    
    for (let i=0; i<sectionNumber.length; i++) {
        // Create a new li element
        let listLi = document.createElement("li");

        // Create a new <a> 
        let a = document.createElement('a');
        // Needed to set the dynamic menu styles here
        a.setAttribute("style", "float:left; display: block; color: white; text-align: center; padding: 16px; text-decoration: none; font-size: 20px;"); //Set <a> attributes

        // Name the section and add in an href
        let j = i + 1;
        a.href =  '#section' + j; // Instead of calling setAttribute, we use href - here we just input the # with the section number to scroll to as defined in the href
        a.innerHTML = "section" + ' ' + j; // <a>INNER_TEXT</a>
        a.id = 'mya' + j
        //a.style.backgroundColor = "red";
        let liA = listLi.appendChild(a);

        // Make a variable with the specific element in the HTML - to populate the list with
        let menuElement = document.getElementById("navbar__list");
        // add the newly created element and its content into the DOM   
        menuElement.appendChild(liA);
        
        // add a class called menu__link to the element 
        menuElement.classList.add("menu__link"); 

        // add a class called btn to the element 
        menuElement.classList.add("btn"); 
    }  
    return false; 
}

function myClassPrintFunction() {
    var x = document.getElementById("navbar__list").classList;
    document.getElementById("demo").innerHTML = x;
  }

let header = document.getElementById("navbar__list");
let btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
  

function myFunction(event) {
    for (let i=1; i<=sectionNumber.length; i++) {
        document.getElementById('mya' + i).style.backgroundColor = "black";
    }
    var x = event.target;
    x.style.backgroundColor = "red";
}


// Scroll to section on link click
function sectionScroll(sectionNumber) {
    var elmnt = document.getElementById(sectionNumber);
    return elmnt.scrollIntoView({behavior: "smooth"});
}



// Set sections as active
/* Step 1: Get element's position in relation to top of the viewport 

And if a certain section is scrolled to, then highlight it!
*/

//TODO: highlight section

