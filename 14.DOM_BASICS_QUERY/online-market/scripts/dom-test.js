// DOM node structure (nodeType (Node, Node.ELEMENT_NODE), tagname, attributes, getAttribute, setAttribute, hasAttribute, children)
window.document; //document
document; //window.document
document.documentElement; //JSON node html root
document.body; //JSON body
document.head; //JSON head
console.log(document.body.children.length);
console.log(document.body.children[0]);
console.log(document.body.children[0].parentElement);
console.log(
  document.body.children[0].parentElement.parentElement.parentElement
);
// document.body, .head
// parent, child, siblings (traverse), parentNode vs parentElement, children vs childNodes

// Query
// getElementById
// getElementsByClassName, getElementsByTagName - note about result lists vs arrays, spread operator vs for loop
// querySelector, querySelectorAll

// attribute versus property (what is the difference) {a: 3, b :5}
// classlist

// styles
// getComputedStyle() vs getBoundingClientRect()
// classList

// Homework
/**
 * 1) Create new site with html,less,BEM(OOCSS), few pages with passed Lighthouse validation
 * 2) Add mobile layout to your site
 * 3) Print to console all buttons, all buttons with class .active (or whatever you will have)
 * 4) Find all <p> elements which are inside a div container with class .container (before that add such to your HTML)
 * 5) Find 1st div with .container class, remove this class programatically
 * 6) Do 4) step again and verify that results are different
 * 7) Print results of step 6), in format like (TAG: "P", ATTRIBUTES: ["some", "another", "class"], CHILD_COUNT: 1)
 * 8) Own projects setup: topic/wireframes/html/less
 * 9) // ... [...] {...} spread operators (*rest operators)
 */
