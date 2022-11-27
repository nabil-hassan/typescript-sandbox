console.log("============================================================================================")
console.log("                           FUNCTIONS                                                        ")
console.log("============================================================================================")

// the following illustrates how to type both arrow functions and standard functions
function greetUser(name:string, age:number) {
    return `${name}:${age}`;
}
let greetUserArrow = (name:string, age:number) => `${name}:${age}`;

console.log(greetUser('Jane', 17)); console.log(greetUserArrow('John', 25));

// default values are typed as follows
let myFnWithDefault = (height:number, weight:number =99) => height * weight;

// they will be inferred if not specified
let myFnWithDefaultNoType = (height:number, weight =99) => {
    // weight = false; => this is illegal
}

// return types can be inferred or specified explicitly
function add(x:number, y:number):number{
    return x * y;
}
function addNoType(x:number, y:number){
    return x * y;
}
let my_var = addNoType(9,1);

    // my_var = false; => THIS IS ILLEGAL AS the type number was inferred

// the NEVER type is used when a method never returns a type e.g. an infinite while loop or a method that throws an exception
function daemon() : never{
    while(true) {}
}
function exThrower() : never {
    throw new Error("Uh oh");
}


