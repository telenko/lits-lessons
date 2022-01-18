/**
 *
 * {
 *    "model": string,
 *    "type": "laptop" | "smartphone",
 *    "price": number,
 *    "details": string,
 *    "image": string (url)
 * }
 *
 */

var productsList = [
  // in future will be given from server
  {
    model: "Lits 1",
    type: "laptop",
    price: 23000,
    image: "media/laptop.png",
    details: "Дуже зручний і тестовий ноутбук",
  },
  {
    model: "Lits 21",
    type: "smartphone",
    price: 12000,
    image: "media/smartphone.jpg",
    details: "Дуже зручний і тестовий смартфон",
  },
];

function showProducts(productsList) {
  const productsContainer = document.querySelector("#products");
  if (!productsContainer) {
    alert("wow, smth is wrong!!!");
    return;
  }
  productsContainer.innerHTML = "";
  for (let i = 0; i < productsList.length; i++) {
    const product = productsList[i];
    const productNode = document.createElement("article");
    productNode.innerHTML = `
              <section class="preview">
                <img
                  class="preview-img"
                  src="${product.image}"
                  width="100"
                  height="100"
                />
              </section>
              <section class="details">
                <p class="type">${product.type}</p>
                <p class="model">${product.model}</p>
                <p class="info">
                  ${product.details}
                </p>
              </section>
              <section class="actions">
                <button class="btn-primary">Замовити</button>
                <p class="price">${product.price} грн</p>
              </section>
    `;
    productNode.classList.add("product");
    productNode.setAttribute("role", "button");
    productsContainer.appendChild(productNode);
  }
}

showProducts(productsList);

// interpolation backticks usage - simplifying logic
const userName = "Andrii";
const someString = `Name is ${userName}`; // Name is Andrii
const someString2 = "Name is " + userName; // Name is Andrii
// complexifying product model with all details
// adding images to products, model, type, price, details
// events basics
// filters implementation (type)

function makeFiltersHandlers() {
  const filterNodes = document.querySelectorAll(".filter-item");
  for (let i = 0; i < filterNodes.length; i++) {
    filterNodes[i].addEventListener("click", function (event) {
      // event JSON
      const targetEle = event.target;
      const filterValue = targetEle.getAttribute("filter-value");
      showProducts(
        productsList.filter((product) => product.type === filterValue)
      );
    });
  }
}
makeFiltersHandlers();
// parametrizing showProducts - simplifying filters

// Homework
/**
 * 1) change countries list to use `` with ${} syntax
 * 2) read about dom events (bubbling, capturing, target) mdn
 * 3) create toggle button (when clicking on it - add class 'toggle',
 *      when clicking again - remove class 'toggle' + styles for 'toggle')
 */
