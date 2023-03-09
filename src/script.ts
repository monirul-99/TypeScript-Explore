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


class player {
    name : string;
    age : number;
    country : string;

    constructor(n : string, a : number, c: string) {
        this.name = n,
        this.age = a,
        this.country = c
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}

const John = new player("John", 39, "bangladesh",)
const Gates = new player("Gates", 45, "bangladesh",)

const players : player[] = []

players.push(John);
players.push(Gates)

console.log(John, Gates);