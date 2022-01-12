// remind DOM
// remind queries
// attribute versus property (what is the difference) {a: 3, b :5}

// mutations
// 1) existing node mutations: setAttribute, removeAttribute, change property (classList, styles)
const allProducts = document.querySelectorAll(".product");
if (allProducts.length > 0) {
  const firstProduct = allProducts[0];
  // firstProduct.setAttribute(
  //   "class",
  //   firstProduct.getAttribute("class") + " sold product"
  // );
  // firstProduct.classList.add("sold");
  // firstProduct.classList.remove("product");
  firstProduct.setAttribute("aria-label", "This product has been sold");
  firstProduct.removeAttribute("role");
  // style prop
  // firstProduct.setAttribute(
  //   "style",
  //   "background: yellow; border: 2px solid black;"
  // );
  // firstProduct.style.background = "yellow";
  // firstProduct.style.border = "2px solid black";
}
// 2) adding new nodes and appending to DOM
// create DOM node .createElement(), .createTextNode()
var divEle = document.createElement("div");
divEle.classList.add("some");
divEle.setAttribute("test", "test2");

// const someTextNode = document.createTextNode("some text inside");
// divEle.appendChild(someTextNode);
divEle.innerHTML = `<span>test3</span><span>test3</span><span>test3</span><span>test3</span><span>test3</span><span>test3</span><span>test3</span>`;
// insert DOM node .appendChild(), .insertBefore()
var parentForNew = document.querySelector("main");
// parentForNew.appendChild(divEle);
divEle.removeAttribute("test");
// innerHTML changing (backticks syntax)
// const someString = "some1";
// const someString1 = "some2  \n some \n ";
// console.log(someString1);

// const someString3 = `

//                      some3
//                      some4
//                      some5
//                      some6
// `;
// console.log(someString3);
// console.log(parentForNew.innerHTML);
// parentForNew.innerHTML = parentForNew.innerHTML + "<span>test</span>"; //bad approach!!

// products
// textContent changing
var productsList = [
  // in future will be given from server
  { model: "Aspire v5" },
  { model: "Aspire v6" },
  { model: "test 3" },
  { model: "test 4" },
  { model: "test 4" },
  { model: "test 4" },
  { model: "test 4" },
  { model: "test 4" },
  { model: "test 4" },
  { model: "test 4" },
];

function showProducts() {
  const productsContainer = document.querySelector("#products");
  if (!productsContainer) {
    alert("wow, smth is wrong!!!");
    return;
  }
  for (let i = 0; i < productsList.length; i++) {
    const productNode = document.createElement("article");
    productNode.innerHTML = `
              <section class="preview">
                <img
                  class="preview-img"
                  src="https://picsum.photos/100/100"
                  width="100"
                  height="100"
                />
              </section>
              <section class="details">
                <p class="type">Тип</p>
                <p class="model">Модель</p>
                <p class="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                  ex quia, laboriosam ratione iure provident nobis sint, labore
                  earum magni vel doloribus. Eligendi repudiandae sunt quam
                  recusandae debitis, illo eaque?
                </p>
              </section>
              <section class="actions">
                <button class="btn-primary">Замовити</button>
                <p class="price">2222 грн</p>
              </section>
    `;
    productNode.classList.add("product");
    productNode.setAttribute("role", "button");
    const modelNode = productNode.querySelector(".model");
    modelNode.textContent = productsList[i].model;
    /**
     * const textNode = document.createTextNode(productsList[i].model);
     * modelNode.appendChild=textNode;
     */
    productsContainer.appendChild(productNode);
  }
}

showProducts();

// var productsList = [
//   {
//     name: "Test 1",
//   },
//   {
//     name: "Test 2",
//   },
//   {
//     name: "Test 3",
//   },
//   {
//     name: "Test 4",
//   },
// ];

// function showProducts() {
//   const container = document.querySelector("#products");
//   for (let product of productsList) {
//     const productNode = document.createElement("article");
//     productNode.classList.add("product");
//     productNode.setAttribute("role", "button");
//     productNode.innerHTML = `
//                 <section class='preview'>
//                     <img class='preview-img' src='https://picsum.photos/100/100' width='100' height='100'>
//                 </section>
//                 <section class='details'>
//                     <p class='type'>Тип</p>
//                     <p class='model'>Модель</p>
//                     <p class='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex quia,
//                         laboriosam ratione iure provident nobis sint, labore earum magni vel doloribus. Eligendi
//                         repudiandae sunt quam recusandae debitis, illo eaque?</p>
//                 </section>
//                 <section class="actions">
//                     <button class='btn-primary'>Замовити</button>
//                     <p class='price'>2222 грн</p>
//                 </section>`;
//     productNode.querySelector(".model").textContent = product.name;
//     container.appendChild(productNode);
//   }
// }

// showProducts();

// 3) removing nodes from DOM
// .remove(), .removeChild()

const allProducts2 = document.querySelectorAll(".product");
allProducts2[1].remove();

const container = document.querySelector("#products");
// container.removeChild(allProducts2[1]);

// extra
// getComputedStyle() vs getBoundingClientRect()
const consolePresenter = document.createElement("div");
document.body.appendChild(consolePresenter);

consolePresenter.textContent = JSON.stringify(
  window.getComputedStyle(container)
);
// console.log(window.getComputedStyle(container));

// interpolation backticks usage - simplifying logic
// filters implementation (type)
// parametrizing showProducts - simplifying filters
// complexifying product model with all details
// adding images to products, model, type, price, details

// Homework
/**
 * 1) show countries list details (name, population, region)
 * 2) * use icons for flags, population
 */
