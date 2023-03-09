import { player } from "./class/player.js";
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
// class player {
//     // public name : string;
//     // readonly age : number;
//     // private country : string;
//     // constructor(n : string, a : number, c: string) {
//     //     this.name = n,
//     //     this.age = a,
//     //     this.country = c
//     // }
//     //Access Modifiers
//     constructor( 
//         public name : string,
//         readonly age : number,
//         private country : string,
//         ) {}
//     play(){
//         console.log(`${this.name} from ${this.country} is playing!`);
//     }
// }
const John = new player("John", 39, "bangladesh");
let Gates;
Gates = new player("Gates", 45, "bangladesh");
const players = [];
players.push(John);
players.push(Gates);
console.log(Gates);
function drawRectangle(option) {
    let width = option.width;
    let length = option.length;
}
let threeDOption = {
    width: 30,
    length: 20,
    height: 10
};
drawRectangle(threeDOption);
// Generics
const addId = (obj) => {
    let id = Math.round(Math.random() * 11);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Monirul",
    age: 23,
    country: "Bangladesh"
});
// let user = {name: "Monirul"}
addId(user);
const response1 = {
    status: 200,
    type: "Better",
    data: true
};
