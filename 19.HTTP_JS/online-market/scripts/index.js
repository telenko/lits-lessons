const run = () => {
   /**
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

   showLoader();
    const xhr = new XMLHttpRequest();
    xhr.open("get", 'https://test-for-hw-default-rtdb.firebaseio.com/products.json'); // <protocol>://<server_address>/context
    xhr.send();
    xhr.addEventListener('load', () => {
      hideLoader();
        const productsList = JSON.parse(xhr.responseText);

        const filters = [
          { label: "Смартфони", active: false, value: "smartphone" },
          { label: "Ноутбуки", active: false, value: "laptop" },
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
    });
};

whenDomReady(run);



/**
 * 0) URL deployments + slides
 * 0.1) GET html page intro (what browser does when you open a site), lets call xmlhttp a page
 * 1) firebase intro
 * 2) db basics - id
 * 3) generate products db in firebase
 * 4) showing products list
 * 4.1) note about cross-domain requests
 * 5) showing loading spinner https://projects.lukehaas.me/css-loaders/
 * 6) error handling : errors handling widget 
 * 7) filters toggle in/out
 * 
 * Homework: 
 * 1) create own firebase realtime db/server and use it to show some data (countries, cities etc)
 * 2) add spinners while data is loading and errors in case of server returned error
 * 3) html css frame of own project
 */