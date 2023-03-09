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