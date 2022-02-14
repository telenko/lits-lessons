import { a } from './a.js';

// інкапсуляція

export function c() {
    console.log("C");
    test();
}

function test() {
    console.log('test');
}

export const FAKE = "3";

a();