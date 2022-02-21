import { whenDomReady } from "../../utils/utils.js";
import { ProductsCollection } from "./ProductsCollection.js";
import { ProductsWidget } from "./ProductsWidget.js";

async function setupProducts() {
    await whenDomReady();
    const collection = new ProductsCollection();
    const widget = new ProductsWidget(collection);
    widget.attach(document.body.querySelector('#contents'));
    widget.render();
}

setupProducts();
