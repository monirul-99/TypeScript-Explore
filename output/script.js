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
class player {
    constructor(n, a, c) {
        this.name = n,
            this.age = a,
            this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const John = new player("John", 39, "bangladesh");
const Gates = new player("Gates", 45, "bangladesh");
const players = [];
players.push(John);
players.push(Gates);
console.log(John, Gates);
