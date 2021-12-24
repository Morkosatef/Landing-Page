# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Steps
- started by selecting all sections, creating doc fragment and selecting the navigation bar to append the fragment in it and storing all in variables

- added two more sections in HTML file

- added event listener to make sure DOM is loaded before building Nav depending on loaded sections 

- iterated over the sections available to create a list item for each section present and creating an anchor element and appending it to them

- used the data custom attribute getting the data in the section's data attribute as the text for the navigation link and giving the list items the class that was provided in the CSS file 

- appended the nav list items to the document fragment created globaly and adding the section's id value to the href value of each corrosponding list using ES6 methods template literals

- added event Listener to clicking the link and preventing the default and used scrollIntoView() function to obtain smooth scrolling



- made an event listener to scroll and a condition for if the section is in the view port or not and it either add or remove active class

- using template literal again, stored the link corrosponding to the section in view port and issuing a conditional for it as well to add and remove classes for highlighting (issued a new class in CSS for list items to be activated when its section is in view port and removed otherwise)

- added media query for responive nav menue by changing its display to block instead if inline block
