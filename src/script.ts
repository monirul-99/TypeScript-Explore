let myFunc: Function;

myFunc = (a : string, b: number, c:any = "Welcome Back") => {
    console.log(`Hello ${a}_${b}`);
}

myFunc("monirul", 99)