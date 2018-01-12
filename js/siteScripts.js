/*Use strict mode for the JavaScript in this file*/
"use strict;"
/*Function to toggle the visibility of a HTML element on and off*/
function toggleVisibility(targetElement) {
    if (document.getElementById(targetElement).style.display === "block") {
        document.getElementById(targetElement).style.display = "none";
    } else {
        document.getElementById(targetElement).style.display = "block";
    }
};
