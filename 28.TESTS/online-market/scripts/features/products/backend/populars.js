export const loadPopulars = () => {
    const promise = new Promise((resolve, reject) => {
      const xhrForProducts = new XMLHttpRequest();
      xhrForProducts.open("get", 'https://test-for-hw-default-rtdb.firebaseio.com/popular.json'); // <protocol>://<server_address>/context
      xhrForProducts.send();
  
      xhrForProducts.addEventListener('load', () => {
        resolve(JSON.parse(xhrForProducts.responseText));
      });
    });
    return promise;
}