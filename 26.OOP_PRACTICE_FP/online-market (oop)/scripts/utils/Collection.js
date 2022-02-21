export class Collection {

    load() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this._url);
        xhr.send();
        return new Promise((resolve, reject)=> {
            xhr.addEventListener("load", () => {
                const list = Object.values(JSON.parse(xhr.responseText));
                this._list = list;
                resolve(list);
            })
        });
    }

    toArray() {
        return this._list;
    }

}

// class ProductsCollection extends Collection {
//     constructor() {
//         this._url = 'https://sglkdsgklsdgsdklg';
//     }
// }

// const collection = new ProductsCollection();
// await collection.load();//collection._list