import { resolveLocale } from "../../locales/locales.js";
import { Widget } from "../../utils/Widget.js";

export class ProductsWidget extends Widget {

    constructor(collection) {
        super();
        this._collection = collection;
    }

    async render() {
        this._element.innerHTML = `
            <section id="filters">
                <ul></ul>
                <div id='news'></div>
            </section>
            <section id="products">
                <!-- products will be here -->
            </section>
      `;
      await this._collection.load();
      this._renderProducts();
    //   const productList = this._collection.toArray();
    }

    _renderProducts() {
        const productsList = this._collection.toArray();
        const productsContainer = this._element.querySelector("#products");
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

}