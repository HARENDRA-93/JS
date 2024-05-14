// Q1. Create a navbar and change the color of its first Element to red.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
// Q.2 Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.Create
//  ANS. NOT

// Q.3 Create an element with three children  Now change the color of first and last element to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

//Q4. Write a javascript code to change background of all <li> tags to cyan.
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});

//Q5. Which of the following is used to look for the farthest ancestor that matches a given css selector
// a) matches b) closest c) contains  d)** none of these
