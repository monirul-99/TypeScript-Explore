"use strict";
let add;
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(8, 4, "minus"));
let userDetails;
userDetails = (a, userInfo) => {
    return `Id Number : ${a} || Name : ${userInfo.name} Age ${userInfo.age}`;
};
console.log(userDetails(56, { name: "Monirul Islam", age: 45 }));
