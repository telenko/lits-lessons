import { loadPopulars } from "./features/products/backend/populars.js";
import { loadProducts } from "./features/products/backend/products.js";
import { 
  getFiltersArray, 
  setupInputFilter,
  setupToggleButton, 
  showFilters, 
  showPopulars, 
  showProducts 
} from "./features/products/ui/index.js";
import { whenDomReady, hideLoader, showLoader } from "./utils/utils.js";

/**
 * 1-10 (1.js, 2.js, 3.js 100kB) = 1Mb
 * 
 * 1 HTTP huge.js 1Mb
 * 
 * 10 HTTP 1-10 100kb
 * 
 * 
  const filtersWidget = new ProductFiltersWidget();
  filtersWidget.render();
  filtersContainer.appendChild(filtersWidget.getElement())
  const products = new ProductsCollection();
  await products.load();
  
  for (let product of products.toArray()) {
    const productWidget = new ProductWidget(product);
    productWidget.render();
    container.appendChild(productWidget.getElement());
  }

  2. level up
  const productListWidget = new ProductListWidget();
  
  productListWidget.apply(products);

  apply(products) {
    if (this._rendered) {
      this._update(products);
      return;
    }
    this.render(products);
  }

  ProductWidget {
    apply(product) {
      if (this._rendered) {...}
    }
  }
 * 
 */

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