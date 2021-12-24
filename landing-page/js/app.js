    /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES20`1`5/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
 //selecting all sections, creating doc fragment and selecting the navigation bar to append the fragment in it and storing all in variables
 const sections= document.querySelectorAll('section');
 const docFragment = document.createDocumentFragment();
 const navBar = document.querySelector('#navbar__list'); 
 




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


//added event listener to make sure DOM is loaded before building Nav depending on loaded sections 

window.addEventListener('DOMContentLoaded', function(){
     
    //iterating over the sections available to create a list item for each section present and creating an anchor element and appending it to them
    for (let section of sections){
        const listItems= document.createElement('li');
        const link = document.createElement('a');
        listItems.appendChild(link);
        //using the data custom attribute getting the data in the section's data attribute as the text for the navigation link
        link.textContent=section.dataset.nav;
        //giving the list items the class already available in the CSS file
        link.classList.add('menu__link');
        
        
       //appending the list items to the fragment  
       docFragment.appendChild(listItems);
       //adding the section's id value in the anchor's href value using template literal
       link.href=`#${section.id}`;

       //adding event Listener to clicking the link and preventing the default to cause smooth scrolling
       link.addEventListener('click', evt=>{
           evt.preventDefault();
           section.scrollIntoView({
               behavior:'smooth',
               block:'center'
           })

        })
    }
       
    navBar.appendChild(docFragment);

});


// Add class 'active' to section when near top of viewport


// i made an event listener to scroll and a condition for if the section is in the view port or not and it either add or remove active class

//event listener for scroll to add or remove active class depending on what in view port
window.addEventListener('scroll', function ActiveClassOnOff(){
    
    //iteration for each section in sections (here i could define 'section' as one of the sections in the loop so i can access it later in finding its corrosponding link in nav bar)
    for(let section of sections){

        //condition to figure out if the section is in view port
       if (section.getBoundingClientRect().top>=0 && section.getBoundingClientRect().top<300){
            section.classList.add('your-active-class');
        }
       else {
          section.classList.remove('your-active-class');  
        }

        //here i got help from the webinar, i could store the link corrosponding to the section in viewport
        let highlightedLink = document.querySelector(`[href="#${section.id}"]`);

        //and then do similar condition as the above
        if (section.getBoundingClientRect().top>=0 && section.getBoundingClientRect().top<300){
            highlightedLink.classList.add("activated__link")
        }
       else {
          highlightedLink.classList.remove("activated__link");  
          
        }
    
    }
});






    
    

    

     




/**
 * End Main Functions
 * Begin Events
 * 
*/

    
       


// Build menu 


// Scroll to section on link click

// Set sections as active



