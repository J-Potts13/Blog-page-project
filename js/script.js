
// Set sections as active
const navList = document.getElementsByTagName("ul")
// items to put in navbar
const firstSec = document.createElement("li");
firstSec.textContent = 'First';
const secondSec = document.createElement("li");
secondSec.textContent = 'Second';
const thridSec = document.createElement("li");
thridSec.textContent = 'Third';
const fourthSec = document.createElement("li");
fourthSec.textContent = 'Fourth';

//append each to navbar
navList.append(firstSec, secondSec, thridSec, fourthSec);

// change the style of the list element
/*
// Change the style of the list elements
firstSec.style.color ="red";
firstSec.style.fontSize = "20px";
firstSec.style.backgroundColor =  "#f1f1f1";

secondSec.style.color = "blue";
secondSec.style.fontSize = "20px";
secondSec.style.backgroundColor = "#eaeaea";

thridSec.style.color = "green";
thridSec.style.fontSize = "20px";
thridSec.style.backgroundColor = "#dcdcdc";

fourthSec.style.color = "purple";
fourthSec.style.fontSize = "20px";
fourthSec.style.backgroundColor = "#cfcfcf";
*/
// Create the navbar element
const navbar = document.createElement("nav");

// Create an unordered list element
const ul = document.createElement("ul");

// Create list items for the navbar
const firstSec = document.createElement("li");
firstSec.textContent = 'First';
const secondSec = document.createElement("li");
secondSec.textContent = 'Second';
const thirdSec = document.createElement("li");
thirdSec.textContent = 'Third';
const fourthSec = document.createElement("li");
fourthSec.textContent = 'Fourth';

// Append list items to the unordered list
ul.appendChild(firstSec);
ul.appendChild(secondSec);
ul.appendChild(thirdSec);
ul.appendChild(fourthSec);

// Append the unordered list to the navbar using appendChild
navbar.appendChild(ul);
document.body.appendChild(navbar);