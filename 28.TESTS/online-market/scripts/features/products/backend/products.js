export const loadProducts = () => {
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