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