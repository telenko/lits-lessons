import { resolveLocale } from "../../../locales/locales.js";
import { getCity } from "../../../utils/getCity.js";

export function showFilters(filters, productsList) {
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
  
export function showProducts(productsList) {
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
  
 export function showPopulars(popularsList) {
    const container = document.querySelector("#news");
    container.innerHTML = `
      <h3>Найпопулярніші товари:</h3>
      <ul>
        ${popularsList.map(popular => `<li>${popular}</li>`).join('')}
      </ul>
    `;
  }
  
 export function setupInputFilter(productsList) {
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
  
 export function setupToggleButton() {
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
  
export async function getFiltersArray() {
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