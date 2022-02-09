const ua = {
  "order": "Замовити",
  "populars": "Найпопулярніші"
}

const en = {
  "order": "Order",
  "populars": "Popular"
}

const resolveLocale = () => {
  if (navigator.language === 'uk') {
    return ua;
  }
  return en;
}

function showFilters(filters, productsList) {
  const container = document.querySelector("#filters > ul");
  for (let i = 0; i < filters.length; i++) {
    const filterNode = document.createElement("li");
    const filter = filters[i];
    filterNode.addEventListener("click", () => {
      for (let i = 0; i < filters.length; i++) {
        if (filters[i] === filter) {
          filters[i].active = true;//filter.active =true;
        } else {
          filters[i].active = false;
        }
      }
      localStorage.setItem("__lits__filters__", JSON.stringify(filters));
      showProducts(
        productsList.filter(filter.filterFunction) //productsList [].filter .map
      );
    });
    filterNode.innerHTML = `<a class="filter-item">${filter.label}</a>`;
    container.appendChild(filterNode);
  }

  const storedFiltersString = localStorage.getItem('__lits__filters__');//undefined
  if (!storedFiltersString) {
    return;
  }
  const storedFiltersArray = JSON.parse(storedFiltersString);//[]
  const activeStoredFilter = storedFiltersArray.find(filter => filter.active === true);
  if (!activeStoredFilter) {
    return;
  }
  const realFilterElement = filters.find(filter => filter.id === activeStoredFilter.id);
  if (!realFilterElement) {
    return;
  }
  realFilterElement.active = true;
  showProducts(
    productsList.filter(realFilterElement.filterFunction) //productsList [].filter .map
  );
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

function setupInputFilter(productsList) {
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
      })
    );
  });
}

function setupToggleButton() {
  const toggleElement = document.querySelector("#sidebar-toggle");
  const sidebarPanel = document.querySelector("#sidepanel");
  toggleElement.addEventListener("click", (event) => {
    if (sidebarPanel.classList.contains("aside-opened")) {
      sidebarPanel.classList.remove("aside-opened");
    } else {
      sidebarPanel.classList.add("aside-opened");
    }
  });
}

async function getFiltersArray() {
  const filters = [
    { id: "0x01", label: "Усі", active: false, filterFunction: (product) => true },
    { id: "0x02",label: "Смартфони", active: false, filterFunction: (product) => product.type === 'smartphone' /** true - product can be visible, false - if hide */},
    { id: "0x03",label: "Ноутбуки", active: false, filterFunction: (product) => product.type === 'laptop' },
  ];
  try {
    const city = await getCity();
    filters.push({
      id: "0x04",
      label: "Тільки з мого міста",
      active: false,
      filterFunction: (product) => product.cities.includes(city)
    });
  } catch (e) {
    console.log("GEOLOCATION failed", e);
  }
  return filters;
}

const loadProducts = () => {
  const promise = new Promise((resolve) => {
    const xhrForProducts = new XMLHttpRequest(); // axios
    xhrForProducts.open("get", 'https://test-for-hw-default-rtdb.firebaseio.com/products.json'); // <protocol>://<server_address>/context
    xhrForProducts.send();

    xhrForProducts.addEventListener('load', () => {
      resolve(Object.values(JSON.parse(xhrForProducts.responseText)));//[]
    });
  });
  return promise;
}

// function loadProductsWithFetch () {
//   return fetch('https://test-for-hw-default-rtdb.firebaseio.com/products.json').then(response => response.json())
// }

// function loadProductsWithAxios () {
//   return axios.get('https://test-for-hw-default-rtdb.firebaseio.com/products.json');
// }

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
  await whenDomReady();
  showLoader();
  try {
    const [productsList, popularsList] = await Promise.all([loadProducts(), loadPopulars()]); 
    setTimeout(() => hideLoader(), 500);
    const filters = await getFiltersArray();
    showProducts(productsList);
    showFilters(filters, productsList);
    showPopulars(popularsList);
    setupInputFilter(productsList);
    setupToggleButton();
   } catch(e) {
    alert("something is wrong");
   }
};
run();

/**
 * Lesson plan
 *
 * 0) fetch minor note
 * 1) a bit refactor to functions
 * 2) making geolocation filter
 * 3) BOM meet storage api (document.cookie, local/sessionStorage, +DB)
 * 
 * https://<domain>/path
 * 
 * 4) storing user preferences in a filter
 * 5) extra - error handling!
 * 
 * 
 * Homework
 * 1) store any user prefs in ls (or cookie)
 */