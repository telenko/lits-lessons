const ua = {
  "order": "Замовити",
  "populars": "Найпопулярніші"
}

const en = {
  "order": "Order",
  "populars": "Найпопулярніші"
}

const resolveLocale = () => {
  if (navigator.language === 'uk') {
    return ua;
  }
  return en;
}

function showFilters(filters) {
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
                <button class="btn-primary">${resolveLocale().order}</button>
                <p class="price">${product.price} грн</p>
              </section>
    `;
    productNode.classList.add("product");
    productNode.setAttribute("role", "button");
    productsContainer.appendChild(productNode);
  }
}

function showPopulars(popularsList) {
  const container = document.querySelector("#news");
  container.innerHTML = `
    <h3>Найпопулярніші товари:</h3>
    <ul>
      ${popularsList.map(popular => `<li>${popular}</li>`).join('')}
    </ul>
  `;
}

const loadProducts = () => {
  const promise = new Promise((resolve) => {
    const xhrForProducts = new XMLHttpRequest();
    xhrForProducts.open("get", 'https://test-for-hw-default-rtdb.firebaseio.com/products.json'); // <protocol>://<server_address>/context
    xhrForProducts.send();

    xhrForProducts.addEventListener('load', () => {
      resolve(Object.values(JSON.parse(xhrForProducts.responseText)));//[]
    });
  });
  return promise;
}

const loadPopulars = () => {
  const promise = new Promise((resolve, reject) => {
    const xhrForProducts = new XMLHttpRequest();
    xhrForProducts.open("get", 'https://test-for-hw-default-rtdb.firebaseio.com/popular.json'); // <protocol>://<server_address>/context
    xhrForProducts.send();

    xhrForProducts.addEventListener('load', () => {
      resolve(JSON.parse(xhrForProducts.responseText));
    });
  });
  return promise;
}

const run = async () => {
   /*
 *
 * {
 *    "model": string,
 *    "type": "laptop" | "smartphone",
 *    "price": number,
 *    "details": string,
 *    "image": string (url),
 *    "id": string
 * }
 *
 */
  await whenDomReady();
  showLoader();
  try {
    // const productsList = await loadProducts();//2s
    // const popularsList = await loadPopulars();//3s
    // const something = await Promise.all([loadProducts(), loadPopulars()]);//[products, populars]
    // const productsList = something[0];
    // const popularsList = something[s1];
    const [productsList, popularsList] = await Promise.all([loadProducts(), loadPopulars()]);//[products, populars]

    //3s
  
    setTimeout(() => hideLoader(), 500);
    const filters = [
      { label: "Смартфони", active: false, value: "smartphone" },
      { label: "Ноутбуки", active: false, value: "laptop" },
    ];
    showProducts(productsList);
    showFilters(filters);
    showPopulars(popularsList);
    
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
    
    const toggleElement = document.querySelector("#sidebar-toggle");
    const sidebarPanel = document.querySelector("#sidepanel");
    toggleElement.addEventListener("click", (event) => {
      if (sidebarPanel.classList.contains("aside-opened")) {
        sidebarPanel.classList.remove("aside-opened");
      } else {
        sidebarPanel.classList.add("aside-opened");
      }
    });
   } catch(e) {
    alert("something is wrong");
   }

};

// function test() {
//   try {
//     // wrongJs();
//     console.log("OK")
//   } catch(error) {
//     console.log("ERROR")
//   } finally {
//     console.log("FINALLY");
//   }
// }

// test();


/**
 * -1) Firebase db fix + browser GET json + Object.values
 * 0) 1 more initial request -> best sellers info - meet callback hell
 * 1) slides + what is async?? timeout intro (+ interval) + loader delay
 * 2) callback hell - meet promises
 * 3) refactor to promises
 * 4) meet async await promises - refactor to async await
 * 5) try catch finally blocks intro - manage exceptions
 * 6) error handling: notifications handling widget 
 * 7) filters toggle in/out
 * 8) routing intro - refactoring to routes
 * 
 * Homework: 
 * 1) move all requests to firebase into promises loadCountries() loadCountries().then(countriesList => console.log(countriesList))
 * 2) read about promise.all and use it to fetch multiple initial requests
 * 3) handle errors from http and show feedback to the user ---> 404 (xhr.status) => alert('request failed')
 * 4) own projects: prepare scketches in paint for responsive layout
 */