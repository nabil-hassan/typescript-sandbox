console.log("============================================================================================")
console.log("                           Union Types                                                      ")
console.log("============================================================================================")

// union type variable
let my_var: string | number = 99; my_var = "99";

// union type functional args
function myUnionArgFn(x: string | number ) {}

// union type function return type
function myUnionReturnFn(): (number | boolean) {return Math.random() < 0.5 ? false : 92}

console.log("============================================================================================")
console.log("                           Union Array Types                                                ")
console.log("============================================================================================")

// for a union type array, enclose types in parentheses
let my_arr: (string | number)[] = ["9", "10"]; my_arr = [9, 10];

console.log("============================================================================================")
console.log("                           Literal Union Types                                              ")
console.log("============================================================================================")

// use literal union types to constrain a variable to a range of possible values e.g. days of week
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

console.log("============================================================================================")
console.log("                           Type Narrowing                                                   ")
console.log("============================================================================================")

// typescript will infer the type of a variable in certain instances - to avoid errors, use typeof

// this is a function that accepts a string
function doStrFn(input: string)   {}

// this can accept a string OR a number
function doMultiFn(input: string | number) {
    // this is invalid, as input could be a number or a string:
    //    => doStrFn(input);

    // thus use typeof to "narrow" the variable
    if (typeof input === "string")
        doStrFn(input);
    else
        console.log(input);
}