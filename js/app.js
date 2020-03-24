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
        let listLi = document.createElement('li');
        //create a new a tag
        let a = document.createElement('a');
        //create a variable to append an <a> to a list
        let liA = listLi.appendChild(a);
        
        // Make the 'section' number
        // Add 1 to the section, to build the correct section number in the nav menu
        let j = i + 1
        // make the text for the nav menu section(s) 
        let linkText = document.createTextNode("section" + j + " ");
        // append text to list
        let newElement = liA.appendChild(linkText);
        // Add in an href within the <a> tag, that has the '#' concatinated to the section number 
        a.setAttribute("href", ("#" + linkText));

        // Make a variable with the specific element in the HTML - to populate the list with
        let secName = document.getElementById("navbar__list");
        // add the newly created element and its content into the DOM   
        secName.appendChild(newElement);
        // add a class called menu__link to the element
        secName.classList.add("menu__link");     
        // Adding an href to try to make it a link
        /* secName.href = "#" + linkText; */
        secName.classList.add("clicked"); 
    }
}

function showclic(event){ 
    //get the element that is clicked
    var ele = event.target;
    
    //add the class using the increment operator
    ele.className += " clicked";
  }

function attachClickEvent(){
  
    // get all the elements with className 'menu__link'. It returns an array
    var menuList = document.getElementsByClassName('clicked');
  
    // get the length of array defined above
    var listLength = menuList.length;
    var i=0;
  
    // run the for loop for each element in the array
    for(;i<listLength;i++){
      
        // attach the event listener
        menuList[i].addEventListener("click", showclic);
    }                                                                             
}



// Find a way to access each individual section, outside of the for loop, and then use the function below to scroll

//secName.onclick = sectionScroll(linkText); 

        
/* secName.addEventListener("click", sectionScroll(linkText)); */
//create an onclick
//liA.onclick = "sectionScroll('section1')";

// Scroll to section on link click
function sectionScroll(tagName, sectionNumber) {
    var elmnt = document.getElementsByTagName(tagName).getElementById(sectionNumber);
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

