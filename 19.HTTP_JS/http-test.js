/** 
 * 0. currentTarget https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
 * 1. Window events https://learn.javascript.ru/onload-ondomcontentloaded
 * 2. stopping bubbles
 * 3. Form events - form signup (and default handlers)

 * 
 * 0. slides
 * { name: "Andrii", lastname: "Test", age: 28, email: "" }   (Content-type: 'application/json')
 * <name>Andrii</name></lastname>Test</lastname>   (Content-type: 'application/xml') skfaslkfaslkf => parse()  {} <>
 *
 * 200 - операція успішна
 * 201 - створено успішно
 * 404 - не знайдено
 * 500 - щось зламалося на сервері
 * 
 * 1. XMLHTTPRequest api https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
 *  ex: https://swapi.dev/api/
 * 
//let's show movies



// firebase https://firebase.google.com/pricing
//          https://console.firebase.google.com/u/0/project/test-fb5f2/database/test-fb5f2-default-rtdb/data/~2Ftests
//    POST  fetch('https://test-fb5f2-default-rtdb.firebaseio.com/tests.json', {body: JSON.stringify({model: "test"}), method: "POST", headers: {'Content-Type': 'application/json'}})
 * 2. showing movies list
 */

/**
 * 1. REST and products
 * 2. firebase intro - why you can omit backend server development
 * 2.1 Notes about Databases, how data is stored, what is ID, why need for it?
 * 3. designing firebase db
 * 4. creating products in base
 * 5. showing products list
 * 
 */

const xhr = new XMLHttpRequest();//{}
xhr.open("get", "https://swapi.dev/api/films");
xhr.send();
xhr.addEventListener('load', () => {
    console.log(JSON.parse(xhr.responseText));
});

/**
 * 1) https://swapi.dev/api/ print any collection into a DOM
 */