import { Collection } from "../../utils/Collection.js";

export class ProductsCollection extends Collection {
 
    constructor() {
        super();
        this._url = 'https://test-for-hw-default-rtdb.firebaseio.com/products.json';
    }

}

// const products = new ProductsCollection();
// await products.load()