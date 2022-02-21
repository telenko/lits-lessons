export class Widget {

    constructor() {
        this._element = document.createElement("div");
    }

    render() {
        // here will be details of rendering
    }

    attach(container) {
        container.appendChild(this._element);
    }

}

// const g = document.createElement('div');
// document.body.appendChild(g);

// const wdg = new ProductListWidget();
// wdg.attach(document.body);//div-->render()[]
// wdg.render();