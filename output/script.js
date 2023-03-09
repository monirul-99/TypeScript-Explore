"use strict";
let myFunc;
myFunc = (a, b, c = "Welcome Back") => {
    console.log(`Hello ${a}_${b}`);
};
myFunc("monirul", 99);
