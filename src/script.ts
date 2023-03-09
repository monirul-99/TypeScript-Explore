import {player} from "./class/player.js"
import {IsPlayer} from "./interface/isPlayer.js"

let add: (x: number, y: number) => number

add = (a: number , b : number) => {
    return a + b
}

let calculation: (a:number, b:number, c:string) => number;

calculation=(a:number, b:number,c:string) => {
    if(c === 'add'){
        return a + b
    } else{
return a - b
    }
}

console.log(calculation(8, 4, "minus"));


let userDetails: (a:number | string, userInfo : {
    name: string,
    age: number
}) => void

userDetails = (a : number | string, userInfo: {
    name: string,
    age: number
}) => {
return `Id Number : ${a} || Name : ${userInfo.name} Age ${userInfo.age}`
}

console.log(userDetails(56, {name: "Monirul Islam", age: 45}));


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

const John = new player("John", 39, "bangladesh",)
let Gates: IsPlayer;

Gates = new player("Gates", 45, "bangladesh",)

const players : player[] = []

players.push(John);
players.push(Gates)


console.log(Gates);


// interface Details for objects
interface RectangleOption{
    width: number;
    length: number;
    // height: number;
}
function drawRectangle(option: RectangleOption){
    let width = option.width
    let length = option.length
}

let threeDOption = {
    width: 30,
    length: 20,
    height: 10
}
drawRectangle(threeDOption)

// Generics

const addId = <T extends {name: string, age: number}>(obj : T) => {
    let id = Math.round(Math.random() * 11)
    return {...obj, id}
}

let user = addId({
    name: "Monirul",
    age: 23,
    country: "Bangladesh"
})

// let user = {name: "Monirul"}

addId(user)

interface APIResponse<T>{
    status: number;
    type: string;
    data: T
}

const response1 : APIResponse<boolean> = {
    status: 200,
    type: "Better",
    data: true
}