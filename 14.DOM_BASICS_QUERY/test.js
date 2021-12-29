// note about lexical scope, this // var let const
var testGlobalVar = "2";
function testScope2() {
  /**
   * var someVarInside;
   * var someVarEnd;
   */
  var testVar2 = "2";
  //   console.log(testVar);
}
function testScope() {
  var testVar = "2";
  let testLet = "2";
  testScope2();
  // console.log(testChildVar);
  var testChildScope = function () {
    console.log(testVar);
    console.log(testLet);
    var testChildVar = "3";
    var testChildChildScope = function () {
      console.log(testLet);
    };
  };
  console.log(testLetInside);
  console.log(someVarInside); //undefined
  var someVarInside = "33";
  let testLetInside = "33";

  if (3 < 5) {
    let someLetInsideIf = "3";
    if (3 < 4) {
      someLetInsideIf;
      var someFuncInsideIf = function () {
        console.log(someLetInsideIf);
      };
    }
    //this
    () => {
      var some = "3";
      this;
      var testFunc = () => {
        this;
      };
    };
  }

  console.log(testVar);
  console.log(testLet);
  var someVarEnd = "44";
}
// testScope();
// DOM simulation more, children, attributes, push pop, delete
var DOM = {
  tagname: "html",
  setAttribute: () => {},
  children: [
    { tagname: "div", children: [], setAttribute: () => {}, },
    { tagname: "p", children: [], setAttribute: () => {}, },
  ],
}; // <html><div></div><p></p></html>

DOM.children[0].tagname = "p";
// <html><p></p><p></p></html>

DOM.children[0].children.push({
  tagname: "span",
  children: [],
  nodeType: 1, // 1 element, 2 text , 3 comment
  innerText: "",
}); // <html><p><span></span></p><p></p></html>
// DOM.children[0].children.pop(); //<html><p></p><p></p></html>

DOM.children[0].children[0].children.push({
  nodeType: 2,
  innerText: "some text",
}); // <===> <html><p><span>some text</span></p><p></p></html>
const fakeNode = {
  tagname: "span",
  children: [],
  nodeType: 1, // 1 element, 2 text , 3 comment
  innerText: "",
  attributes: {
    some: "text",
    class: "cool-text",
  },
};
// DOM.children[0].children[0].
//<html><p><span some="text" class="cool-text">some text</span></p><p></p></html>

// DOM node structure (nodeType (Node, Node.ELEMENT_NODE), tagname, attributes, getAttribute, setAttribute, hasAttribute, children)
window.document;//document
document;//window.document
// document.body, .head
// parent, child, siblings (traverse), parentNode vs parentElement, children vs childNodes
// getElementById
// getElementsByClassName, getElementsByTagName - note about result lists vs arrays, spread operator vs for loop
// querySelector, querySelectorAll

// attribute versus property (what is the difference)
// styles, classlist
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
 * https://docs.google.com/presentation/d/1cVRMfjSc0tsXyS5_qnm08gtPNPJPAI6BTtmLrXq7Xak/edit?usp=sharing
 * 8) Own projects setup: topic/wireframes/html/less
 */
