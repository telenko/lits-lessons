/**
 * 13) promise combining promise.all, promise.allSettled 
            Promise.all will reject as soon as one of the Promises in the array rejects.
            Promise.allSettled will never reject - it will resolve once all Promises in the array have either rejected or resolved.
   14) promise all sum with ok args, with failure - verify results
   15) promise settled with same conditions
   16) async await intro (function returns a promise), how return works in such function (sets fullfilled and fullfillValue)
   17) how error (any js error) works in such function - rejected and rejectValue
   18) how await works - waits for promise to be fullfilled and returns it fullfillValue
   19) example - rewriting sum chain examples with awaits
   20) add delays to code
   21) try promise all with awaits
   22) try {} catch {} with async functions - try failed arguments
   23) .finally() note for promises try{} catch{}finally{} notes for async
   2xx) refactoring market to async await - await domReady() await Promise.all([reqs]) etc

   30) BOM intro - what is bom? what's inside
   31) meet navigator object - userAgent, platform, connection
   detect browser
   language
   getBattery()
   online vs connection

   32) meet geolocation api - detect longitude/latitude
       use google api to detect city
   33) add use my city products only filter

   34) meet storage api - document.cookie, sessionStorage, localStorage

   35) store user preferences in localStorage (note about complex filters)
   
 * 

   HW:
   0) get city and show on DOM (use loaders while pending)


   
   1) use script to detect city and store it in localstorage.
   if city exists in localstorage - then don't call my script. show city to the user via DOM
   2) [can be for monday]: show in DOM browser which uses user (Chrome, Firefox etc)
   3) [can be for monday]: show somewhere in DOM network type of user
   4) use css for your pages (include bootstrap)
 */

console.log("WORKS");

// const operation = new XMLHttpRequest();
// new Promise(function() {});


const promiseSimulator = {
  state: "pending",//"fulfilled" "rejected"
  fulfillValue: "325235",//24 {} []    [{}, {}, {}]
  rejectValue: " ", // 24 {} [] Error "something went wrong", "server is not responing"


  then: function(cb) {
    cb(this.fulfillValue);

    return {
      state: "pending",
      fulfillValue: "325235",
      rejectValue: ""
    };
  },
  catch: function(cb) {
    cb(this.rejectValue)
  }
};

// promiseSimulator.then((response) => {
//   console.log(response);
//   // render DOM
// });

// promiseSimulator.catch((error) => {
//   alert(error);
// });


// setTimeout(function() {
//   console.log("timer is done");
// }, 1000);
// console.log("timeout subscribed");// promisifying

function delay(timeoutMillis) {// must return a promise object
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
      // console.log("timer in promise is done");
      resolve();
    }, timeoutMillis);
  });
  return promise;
}

// console.log("promise is starting");
// const delayPromise = delay(2000);
// delayPromise.then(() => {
//   console.log("Wow, delay is done")
// });
// delayPromise.catch(() => {
//   console.log("ouch, smth went wrong");
// });

function sumAsync(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("one of arguments is not a number");
      return;// return undefined;
    }

    setTimeout(() => {
      const sum = a + b;
      resolve(sum);
    }, 1000);

  });
}


function isBoolAsync() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(false);//false
    }, 1000);

  });
}

// console.log("starting calculations");
// sumAsync(2, 3).then((result) => {
//   console.log("result is: " + result);
// });
// console.log("continue performing sync operations");

// console.log("starting failed promise");
// const sumPromise1 = sumAsync(2, "3");
// sumPromise1.then((result) => {
//   console.log("result is: " + result);
// });
// sumPromise1.catch(e => {
//   console.log("sum failed, reason: " + e);
// })
// console.log("continue performing sync operations");


sumAsync(2, 3) // 5
    .then(r => r * 2) // 10
    .catch(() => console.log("error 1"))
    // .then((r) => {
    //   console.log("calculating second sum");
    //   return sumAsync("3", r);
    // }) // { state: pending, fullfillValue: 13  }
    .catch(() => console.log("error 2")) // fulfilled
    .then(delay(3000))// notice about fulfillvalue
    .then((aaas) => { console.log("result in chain 1 is: " + aaas) }) // undefined
      // => { state: fulfillValue: 2: rejectedValue }
    .then((a) => { console.log("result in chain 2 is: " + a) })
    .catch(() => console.log("error 3"))
    .then((a) => { return 2 })


async function runSumRewriteToAsync() {
  try {
    const sum1 = await sumAsync(2, 3);
    await delay(3000);
    console.log("result in chain 1 is: " + sum1);
    console.log("result in chain 2 is: " + sum1);
    if (await isBoolAsync()) {
      console.log("WOW")
    }
    return 2;
  } catch(e) {
    console.log("error 1");
  }
}

runSumRewriteToAsync().then(() => console.log("OK3")).catch(() => console.log("ERR3"));

// console.log('all started')
// Promise.all([delay(3000), delay(1000), delay(5000)]).then(() => console.log("all finished"))

// Promise.all([
//   sumAsync(2,3),//5
//   sumAsync(3,4),//7
//   // sumAsync("d", "er")
// ])
//     .then((a) => console.log("OK", a)) // [5, 7]
//     .catch((e) => console.log("ERROR")); // "one of arguments is not a number"

// async function sum2(a, b) { //fullfillValue = 5
//   // return a + b;//undefined (.then .catch)

//   // jdsfdsfhsdkjghsdjkghd();//rejected rejectedValue is error itself

//   return a + b;
// }

// sum2(2,3)
//     .then((result) => console.log("OK2", result))
//     .catch((e) => console.log("ERR2", e))

async function runAsyncAwaitTest () {
  const sum1 = await sumAsync(3, 6);//8
  // await delay(4000);
  const fakeVar = 23;
  const sum2 = await sumAsync(2, sum1); // await Promise <pending> ==> fulfilled or rejected
  console.log('test');
  
  console.log("RESULT IS", sum1, sum2);
  console.log('test');


  return sum2;
}

// runAsyncAwaitTest()
//     .then((result) => console.log("OK2", result))
//     .catch((e) => console.log("ERR2", e))

/**
 * function fnBrowserDetect(){
                 
         let userAgent = navigator.userAgent;
         let browserName;
         
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
           }else if(userAgent.match(/opr\//i)){
             browserName = "opera";
           } else if(userAgent.match(/edg/i)){
             browserName = "edge";
           }else{
             browserName="No browser detection";
           }
         
          document.querySelector("h1").innerText="You are using "+ browserName +" browser";         
  }
 */


