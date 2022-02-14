import { c } from "./c.js";//var cModule = { c: () => {}, FAKEE: '3' };

export default function b() {
    console.log("B");
}

c();
// console.log("FAKE IS", cModule.FAKE);

// a -> b
// b -> c
// c -> a

/**
 * t
 * 
 * a -> b
 * a -> t
 * b -> c
 * c -> ts
 */


// Webpack, Rollup