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

        let j = i + 1;
        a.href =  '#section' + j; // Instead of calling setAttribute
        a.innerHTML = "section" + j; // <a>INNER_TEXT</a>
        let liA = listLi.appendChild(a);

        // Make a variable with the specific element in the HTML - to populate the list with
        let menuElement = document.getElementById("navbar__list");
        // add the newly created element and its content into the DOM   
        menuElement.appendChild(liA);
        
        // add a class called menu__link to the element
        menuElement.classList.add("menu__link"); 
    }  
    return false; 
}


// Working on trying to attach a click event on an item in the navigation menu
function myFunction(event) { 
    var x = event.target;
    let menuId = document.getElementById("menu__name");
    for (let i=0; i<menu__name.length; i++) {
        //x.style.backgroundColor = "green";
        menuId.style.backgroundColor = "green";
        //document.getElementById("menu__name") = x.style.backgroundColor = "red";
    }
    document.getElementById("menu__name").innerHTML = x.style.backgroundColor = "section";
  }







  //TODO:
//function myFunction(event) { 
//var x = event.target;
//x.style.backgroundColor = "red";
//}

// Add in an onclick attribute within each new <a> tag created in the addElement function above 
function attachClickEvent(){
    var x = event.target;
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

// document.getElementById("menu__name").addEventListener("click", sectionScroll(sectionNumber));

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

