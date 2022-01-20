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
  {
    model: "Січ 1",
    type: "smartphone",
    price: 12000,
    image: "media/smartphone.jpg",
    details: "Дуже зручний і тестовий смартфон",
  },
];

const filters = [
  { label: "Смартфони", active: false, value: "smartphone" },
  { label: "Ноутбуки", active: false, value: "laptop" },
  { label: "Телевізори", active: false, value: "tv" },
  { label: "Ціна", active: false, value: [0, 12000] },
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

function showFilters() {
  const container = document.querySelector("#filters > ul");
  for (let i = 0; i < filters.length; i++) {
    const filterNode = document.createElement("li");
    const filter = filters[i];
    filterNode.addEventListener("click", () => {
      filter.active = true;
      showProducts(
        productsList.filter((product) => product.type === filter.value) //productsList [].filter .map
      );
    });
    filterNode.innerHTML = `<a class="filter-item">${filter.label}</a>`;
    container.appendChild(filterNode);
  }
}
showFilters();

// function makeFiltersHandlers() {
//   const filterNodes = document.querySelectorAll(".filter-item"); //[2nodes]
//   for (let i = 0; i < filterNodes.length; i++) {
//     filterNodes[i].addEventListener("click", function (event) {
//       //current filter node
//       // event JSON
//       const targetEle = event.target; // link to node which was clicked
//       const filterValue = targetEle.getAttribute("filter-value");
// showProducts(
//   productsList.filter((product) => product.type === filterValue) //productsList [].filter .map
// );
//     });
//   }
// }
// makeFiltersHandlers();

// events details, multiple events console
// const toggleElement = document.querySelector("#sidebar-toggle");
// toggleElement.addEventListener("click", function (event) {
//   if (!event.isTrusted) {
//     return;
//   }
//   console.log(event);
// });
// toggleElement.addEventListener("dblclick", function (event) {
//   if (!event.isTrusted) {
//     return;
//   }
//   console.log(event);
// });
// toggleElement.addEventListener("mouseover", function (event) {
//   if (!event.isTrusted) {
//     return;
//   }
//   console.log(event);
// });
// input events 'change'
// change
// keyup, keydown
// keypress

const searchInput = document.querySelector("#main-search");
searchInput.addEventListener("input", function (event) {
  showProducts(
    productsList.filter((product) => {
      return (
        product.model
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) || //OR gate або
        product.type.toLowerCase().includes(event.target.value.toLowerCase())
      );
    }) //productsList [].filter .map
  );
});

// phases of events
// toggle for filters
// adding sidebar
const toggleElement = document.querySelector("#sidebar-toggle");
const sidebarPanel = document.querySelector("#sidepanel");
toggleElement.addEventListener("click", (event) => {
  if (sidebarPanel.classList.contains("aside-opened")) {
    sidebarPanel.classList.remove("aside-opened");
  } else {
    sidebarPanel.classList.add("aside-opened");
  }
});

// handling search bar
// creating cart page
