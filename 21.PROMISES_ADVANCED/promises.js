/**
 * 
 * 1) new intro (constructor definition, constructor vs just function, why cannt avoid new)
 * 2) promise object overview (state: pending, fullfilled, rejected; and returnData; fullfillValue, rejectValue)
 * 3) .then() .catch() intro - adding callbacks for fullfilled and rejected state
 * 4) example with timeout - delay promise - resolve, reject intro -> provided callbacks (+logs)
 *                                by promise init function to change promise state + use .then()
 * 5) example with fullfilledValue, rejectedValue - if args correct then sum in timeout, else reject with error , 
 *                                use then catch to see return values (+logs)
 * 6) promise chaining .then().then() (.then() returns new promise with another fullfillValue)
 * 7) example with .then(return) - new promise with new fullfillValue
 * 8) example with .then(noreturn) - new promise with empty fullfillValue
 * 9) promise chaining .then(promise) => new promise which state fillfill or rejected and
 *                                return data inherits from received promise
 * 10) example with chaining asyncSum(2,3).then(r => asyncSum(r,5)).then(r => r * 2).then(r => asyncSum(r, 5)).then(r => console.log("res", r))
 * 11) dot note
 * 12) catch note (change example 10 to contain error promises in the middle)
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
   2x) general idea - simplifying, commonifying all async operations - do smth after smth will happen
                        which simplifies code and allows to combine async operations
   2xx) refactoring market to async await - await domReady() await Promise.all([reqs]) etc
 * 

   HW:
   1) make 2 initial calls to firebase to fetch some data in parallel (allSettled)
   3) handle all errors - on error show some notification to the user
   4) show results of both requests in DOM (f.e. countries list and unions list)
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
    }, 2000);

  });
}

console.log("starting calculations");
sumAsync(2, 3).then((result) => {
  console.log("result is: " + result);
});
console.log("continue performing sync operations");

console.log("starting failed promise");
const sumPromise1 = sumAsync(2, "3");
sumPromise1.then((result) => {
  console.log("result is: " + result);
});
sumPromise1.catch(e => {
  console.log("sum failed, reason: " + e);
})
console.log("continue performing sync operations");


sumAsync(2, 3) // 5
    .then(r => r * 2) // 10
    .catch(() => console.log("error 1"))
    .then((r) => {
      console.log("calculating second sum");
      return sumAsync("3", r);
    }) // { state: pending, fullfillValue: 13  }
    .catch(() => console.log("error 2")) // fulfilled
    .then(delay(3000))// notice about fulfillvalue
    .then((aaas) => { console.log("result in chain 1 is: " + aaas) }) // undefined
    .then((a) => { return 2 })  // => { state: fulfillValue: 2: rejectedValue }
    .then((a) => { console.log("result in chain 2 is: " + a) })
    .catch(() => console.log("error 3"))

console.log('all started')
Promise.all([delay(3000), delay(1000), delay(10000)]).then(() => console.log("all finished"))